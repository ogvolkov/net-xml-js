using System;

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

        public void VisitReference(string propertyName, string propertyTypeName)
        {
            var template = new Reference(propertyName, propertyTypeName);
            _resultHandler(template.TransformText());
        }

        public void VisitCollection(string propertyName, string itemTypeName)
        {
            var template = new Collection(propertyName, itemTypeName);
            _resultHandler(template.TransformText());
        }
    }
}
