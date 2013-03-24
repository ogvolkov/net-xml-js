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

        public object CreateDefaultInstance(Type type)
        {
            return CreateInstance(type, 0, () => { });
        }

        public IEnumerable<object> CreateAllSampleInstances(Type type)
        {
            var requiredInstances = 1;

            for (int i = 0; i < requiredInstances; i++)
            {
                yield return CreateInstance(type, i, () => requiredInstances *= 2);
            }
        }

        private object CreateInstance(Type type, int index, Action onForkFound)
        {
            int fork = -1;

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
                    if (index == 0)
                    {
                        onForkFound();
                    }
                    fork++;

                    if ((index & (1 << fork)) == 0)
                    {
                        propertyValue = CreateDefaultInstance(propertyType);
                    }                    
                }
                else
                {
                    var collectionType = TypesInfo.TryGetCollectionType(propertyType);

                    if (collectionType != null)
                    {
                        if (index == 0)
                        {
                            onForkFound();
                        }
                        fork++;

                        if ((index & (1 << fork)) != 0)
                        {
                            var itemType = collectionType.GetGenericArguments().First();
                            var addMethod = collectionType.GetMethod("Add");

                            var collection = Activator.CreateInstance(propertyType);

                            for (int i = 0; i < 2; i++)
                            {
                                var item = CreateDefaultInstance(itemType);
                                addMethod.Invoke(collection, new[] { item });
                            }

                            propertyValue = collection;
                        }                        
                    }
                }

                property.SetValue(instance, propertyValue, null);
            }
            return instance;
        }
    }
}

