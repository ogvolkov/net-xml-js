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
            foreach (var property in type.GetProperties())
            {
                object value;
                if (instance != null)
                {
                    value = property.GetValue(instance, null);
                }
                else
                {
                    value = null;
                }
                assertGenerator.Value = value;

                var propertyType = property.PropertyType;                                

                if (propertyType == typeof(string))
                {
                    assertGenerator.VisitString(property.Name);                                        
                }
                else if (propertyType == typeof(DateTime))
                {
                    assertGenerator.VisitDate(property.Name);                    
                }
                else if (_types.Contains(propertyType))
                {
                    assertGenerator.VisitReference(property.Name, propertyType);                    
                }
                else
                {
                    var collectionType = TypesInfo.TryGetCollectionType(propertyType);

                    if (collectionType != null)
                    {
                        assertGenerator.VisitCollection(property.Name, collectionType);                        
                    }
                    else
                    {
                        _stringWriter(string.Format("equal({0}.{1}, {2});", objectName, property.Name, value));
                    }
                }
            }
        }
    }
}
