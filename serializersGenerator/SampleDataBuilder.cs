using System;
using System.Collections.Generic;

namespace serializersGenerator
{
    public class SampleDataBuilder
    {
        private readonly IEnumerable<Type> _customTypes;

        public SampleDataBuilder(IEnumerable<Type> customTypes)
        {
            _customTypes = customTypes;
        }

        public object CreateDefaultInstance(Type type, ObjectBuildPath buildPath)
        {
            return CreateInstance(type, 0, () => { }, buildPath);
        }

        public IEnumerable<object> CreateAllSampleInstances(Type type)
        {
            var requiredInstances = 1;

            var buildPath = new ObjectBuildPath(type);

            for (int i = 0; i < requiredInstances; i++)
            {
                yield return CreateInstance(type, i, () => requiredInstances *= 2, buildPath);
            }
        }

        private object CreateInstance(Type type, int index, Action onForkFound, ObjectBuildPath buildPath)
        {
            object instance = null;

            try
            {
                instance = Activator.CreateInstance(type);
            }
            catch (Exception exception)
            {
                Console.WriteLine("Cannot instantiate type {0}, exception {1}", type, exception);
            }

            var propertyValueBuilder = new PropertyValueBuilder(index, CreateDefaultInstance, onForkFound, buildPath);
            var propertyProcessor = new PropertyProcessor(propertyValueBuilder, _customTypes);

            foreach (var property in type.GetProperties())
            {
                if (!property.CanWrite) continue;

                propertyProcessor.Process(property.Name, property.PropertyType);
                property.SetValue(instance, propertyValueBuilder.Value, null);
            }
            return instance;
        }
    }
}

