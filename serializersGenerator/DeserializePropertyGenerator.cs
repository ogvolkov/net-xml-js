using System;
using System.Linq;

using serializersGenerator.Deserializers;

namespace serializersGenerator
{
    class DeserializePropertyGenerator : IPropertyVisitor
    {
        private readonly Action<string> _resultHandler;

        public DeserializePropertyGenerator(Action<string> resultHandler)
        {
            if (resultHandler == null)
            {
                throw new ArgumentNullException("resultHandler");
            }

            _resultHandler = resultHandler;
        }

        public void VisitString(string propertyName)
        {
            var template = new Deserializers.String(propertyName);
            _resultHandler(template.TransformText());
        }

        public void VisitInteger(string propertyName)
        {
            var template = new Integer(propertyName);
            _resultHandler(template.TransformText());
        }

        public void VisitDate(string propertyName)
        {
            var template = new Date(propertyName);
            _resultHandler(template.TransformText());
        }

        public void VisitReference(string propertyName, Type propertyType)
        {
            var template = new Reference(propertyName, propertyType.Name);
            _resultHandler(template.TransformText());
        }

        public void VisitCollection(string propertyName, Type propertyType, Type collectionType)
        {
            var itemType = collectionType.GetGenericArguments().First();
            var template = new Collection(propertyName, itemType.Name);
            _resultHandler(template.TransformText());
        }

        public void VisitObject(string propertyName, Type propertyType)
        {
            var template = new Deserializers.Object(propertyName);
            _resultHandler(template.TransformText());
        }
    }
}
