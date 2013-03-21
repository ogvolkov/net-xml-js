using serializersGenerator.Deserializers;

namespace serializersGenerator
{
    class DeserializePropertyGenerator
    {
        public string VisitString(string propertyName)
        {
            var template = new String(propertyName);
            return template.TransformText();
        }

        public string VisitInteger(string propertyName)
        {
            var template = new Integer(propertyName);
            return template.TransformText();
        }

        public string VisitDate(string propertyName)
        {
            var template = new Date(propertyName);
            return template.TransformText();
        }

        public string VisitReference(string propertyName, string propertyTypeName)
        {
            var template = new Reference(propertyName, propertyTypeName);
            return template.TransformText();
        }

        public string VisitCollection(string propertyName, string itemTypeName)
        {
            var template = new Collection(propertyName, itemTypeName);
            return template.TransformText();
        }
    }
}
