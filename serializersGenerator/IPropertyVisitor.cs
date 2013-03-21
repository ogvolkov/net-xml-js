namespace serializersGenerator
{
    public interface IPropertyVisitor
    {
        void VisitString(string propertyName);

        void VisitInteger(string propertyName);

        void VisitDate(string propertyName);

        void VisitReference(string propertyName, string propertyTypeName);

        void VisitCollection(string propertyName, string itemTypeName);
    }
}