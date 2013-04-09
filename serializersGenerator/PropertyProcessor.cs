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

        public void Process(string propertyName, Type propertyType)
        {            
            if (propertyType == typeof(DateTime))
            {
                _visitor.VisitDate(propertyName);
            }
            else if (propertyType == typeof(int))
            {
                _visitor.VisitInteger(propertyName);
            }
            else if (propertyType == typeof(int?))
            {
                _visitor.VisitNullableInteger(propertyName);
            }
            else if (propertyType == typeof(object))
            {
                _visitor.VisitObject(propertyName, propertyType);
            }
            else if (propertyType == typeof(string))
            {
                _visitor.VisitString(propertyName);
            }
            else if (propertyType.IsEnum)
            {
                _visitor.VisitEnum(propertyName, propertyType);
            }
            else if (_types.Contains(propertyType))
            {
                _visitor.VisitReference(propertyName, propertyType);
            }
            else
            {
                var collectionType = TypesInfo.TryGetCollectionType(propertyType);

                if (collectionType != null)
                {
                    _visitor.VisitCollection(propertyName, propertyType, collectionType);
                }
                else
                {
                    _visitor.VisitUnsupported(propertyName, propertyType);                    
                }
            }            
        }
    }
}
