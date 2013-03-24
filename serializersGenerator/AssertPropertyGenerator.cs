using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

using serializersGenerator.Asserts;

namespace serializersGenerator
{
    class AssertPropertyGenerator/* : IPropertyVisitor*/
    {
        private readonly Action<string> _resultHandler;

        private readonly string _objectName;

        private object _value;

        private readonly ObjectPropertiesComparer _propertiesComparer;

        public object Value
        {
            set { _value = value; }
        }

        public AssertPropertyGenerator(string objectName, Action<string> resultHandler, IEnumerable<Type> allTypes)
        {
            if (resultHandler == null)
            {
                throw new ArgumentNullException("resultHandler");
            }

            _objectName = objectName;
            _resultHandler = resultHandler;
            _propertiesComparer = new ObjectPropertiesComparer(resultHandler, allTypes);
        }

        public void VisitString(string propertyName)
        {
            var template = new Asserts.String(_objectName, propertyName, _value);
            _resultHandler(template.TransformText());
        }

        public void VisitInteger(string propertyName)
        {
            var template = new Integer(_objectName, propertyName, _value);
            _resultHandler(template.TransformText());
        }

        public void VisitDate(string propertyName)
        {
            var template = new Date(_objectName, propertyName, _value);
            _resultHandler(template.TransformText());
        }

        public void VisitReference(string propertyName, Type propertyType)
        {
            if (_value != null)
            {
                _propertiesComparer.CompareObjectProperties(string.Format("{0}.{1}", _objectName, propertyName), _value, propertyType);                
            }
            else
            {
                var template = new NullPropertyValue(_objectName, propertyName);
                _resultHandler(template.TransformText());            
            }            
        }

        public void VisitCollection(string propertyName, Type collectionType)
        {
            var itemType = collectionType.GetGenericArguments().First();
            var items = _value as IEnumerable;

            if (items != null)
            {
                int index = 0;
                foreach (var item in items)
                {
                    var itemJsAccessor = string.Format("{0}.{1}[{2}]", _objectName, propertyName, index);
                    _propertiesComparer.CompareObjectProperties(itemJsAccessor, item, itemType);                                    
                    ++index;
                }
            }
            else
            {
                var template = new NullPropertyValue(_objectName, propertyName);
                _resultHandler(template.TransformText());
            }
        }
    }
}
