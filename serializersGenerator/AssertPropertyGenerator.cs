using System;
using System.Collections.Generic;
using System.Linq;

using serializersGenerator.Asserts;

namespace serializersGenerator
{
    class AssertPropertyGenerator : IPropertyVisitor
    {
        private readonly Action<string> _resultHandler;

        private readonly string _objectName;

        private object _value;

        private readonly ObjectPropertiesComparer _propertiesComparer;

        private readonly IEnumerable<Type> _types; 

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
            _types = allTypes;
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

        public void VisitCollection(string propertyName, Type propertyType, Type collectionType)
        {
            var items = _value as IEnumerable<object>;

            if (items != null)
            {
                var itemType = collectionType.GetGenericArguments().First();

                var lengthAssert = string.Format("equal({0}.{1}.length, {2})", _objectName, propertyName, items.Count());
                _resultHandler(lengthAssert);

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

        public void VisitObject(string propertyName, Type propertyType)
        {
            var assertGenerator = new AssertPropertyGenerator(_objectName, _resultHandler, _types);
            assertGenerator.Value = _value;
            var propertyProcessor = new PropertyProcessor(assertGenerator, _types);

            propertyProcessor.Process(propertyName, _value.GetType());
        }

        public void VisitEnum(string propertyName, Type propertyType)
        {
            var template = new Asserts.Enum(_objectName, propertyName, propertyType.Name, _value);
            _resultHandler(template.TransformText());
        }

        public void VisitNullableInteger(string propertyName)
        {
            var template = new NullableInteger(_objectName, propertyName, _value);
            _resultHandler(template.TransformText());
        }

        public void VisitUnsupported(string propertyName, Type propertyType)
        {
        }

        public void VisitDecimal(string propertyName)
        {
            var template = new Asserts.Decimal(_objectName, propertyName, _value);
            _resultHandler(template.TransformText());
        }
    }
}
