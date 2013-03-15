using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace serializersGenerator
{
    public class SampleDataBuilder
    {
        private readonly ICollection<Type> _customTypes;

        public SampleDataBuilder(ICollection<Type> customTypes)
        {
            _customTypes = customTypes;
        }

        public object CreateSampleInstance(Type type)
        {
            var instance = Activator.CreateInstance(type);
            foreach (var property in type.GetProperties())
            {
                var propertyType = property.PropertyType;

                object propertyValue = null;
                if (propertyType == typeof(string))
                {
                    propertyValue = "Test";
                }
                else if (propertyType == typeof(int))
                {
                    propertyValue = 42;
                }
                else if (propertyType == typeof(DateTime))
                {
                    propertyValue = DateTime.Now;
                }
                else if (_customTypes.Contains(propertyType))
                {
                    propertyValue = CreateSampleInstance(propertyType);
                }
                else
                {
                    var collectionType = propertyType.GetInterfaces().FirstOrDefault(
                        t => t.IsGenericType && t.GetGenericTypeDefinition() == typeof(ICollection<>));

                    if (collectionType != null)
                    {
                        var itemType = collectionType.GetGenericArguments().First();
                        var addMethod = collectionType.GetMethod("Add");

                        var collection = Activator.CreateInstance(propertyType);                        

                        for (int i = 0; i < 2; i++)
                        {
                            var item = CreateSampleInstance(itemType);
                            addMethod.Invoke(collection, new [] { item });
                        }

                        propertyValue = collection;
                    }
                }

                property.SetValue(instance, propertyValue, null);
            }
            return instance;
        }
    }
}

