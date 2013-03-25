using System;
using System.Collections.Generic;
using System.Linq;

namespace serializersGenerator
{
    public class ObjectPropertiesComparer
    {
        private Action<string> _stringWriter;

        private IEnumerable<Type> _types;

        public ObjectPropertiesComparer(Action<string> stringWriter, IEnumerable<Type> allTypes)
        {
            _stringWriter = stringWriter;
            _types = allTypes;
        }

        public void CompareObjectProperties(string objectName, object instance, Type type)
        {
            var assertGenerator = new AssertPropertyGenerator(objectName, _stringWriter, _types);
            var propertyProcessor = new PropertyProcessor(assertGenerator, _types);

            foreach (var property in type.GetProperties())
            {
                if (instance != null)
                {
                    assertGenerator.Value = property.GetValue(instance, null);
                }
                else
                {
                    assertGenerator.Value = null;
                }

                propertyProcessor.Process(property.Name, property.PropertyType);
            }
        }
    }
}
