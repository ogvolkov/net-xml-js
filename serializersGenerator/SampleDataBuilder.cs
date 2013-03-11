using System;
using System.Collections.Generic;

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
                
                property.SetValue(instance, propertyValue, null);
            }
            return instance;
        }
    }
}

