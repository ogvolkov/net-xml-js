using System;

namespace serializersGenerator
{
    public class SampleDataBuilder
    {
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
                
                property.SetValue(instance, propertyValue, null);
            }
            return instance;
        }
    }
}

