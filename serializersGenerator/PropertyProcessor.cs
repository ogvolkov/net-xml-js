using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace serializersGenerator
{
    public class PropertyProcessor
    {
        private readonly IPropertyVisitor _visitor;

        private readonly IEnumerable<Type> _types;

        public PropertyProcessor(IPropertyVisitor propertyVisitor, IEnumerable<Type> allTypes)
        {
            _visitor = propertyVisitor;
            _types = allTypes;
        }

        public void Process(PropertyInfo property)
        {
            var propertyType = property.PropertyType;
            if (propertyType == typeof(DateTime))
            {
                _visitor.VisitDate(property.Name);
            }
            else if (propertyType == typeof(int))
            {
                _visitor.VisitInteger(property.Name);
            }
            else if (_types.Contains(propertyType))
            {
                _visitor.VisitReference(property.Name, propertyType);
            }
            else
            {
                var collectionType = TypesInfo.TryGetCollectionType(propertyType);

                if (collectionType != null)
                {                    
                    _visitor.VisitCollection(property.Name, propertyType, collectionType);
                }
                else
                {
                    _visitor.VisitString(property.Name);
                }
            }
        }
    }
}
