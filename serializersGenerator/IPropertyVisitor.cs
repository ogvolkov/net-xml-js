using System;

namespace serializersGenerator
{
    public interface IPropertyVisitor
    {
        void VisitString(string propertyName);

        void VisitInteger(string propertyName);

        void VisitDate(string propertyName);

        void VisitReference(string propertyName, Type propertyType);

        void VisitCollection(string propertyName, Type propertyType, Type collectionType);

        void VisitObject(string propertyName, Type propertyType);

        void VisitEnum(string propertyName, Type propertyType);

        void VisitNullableInteger(string propertyName);
    }
}