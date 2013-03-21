namespace serializersGenerator.Deserializers
{
    public partial class Reference
    {
        private readonly string propertyName;

        private readonly string propertyTypeName;

        public Reference(string propertyName, string propertyTypeName)
        {
            this.propertyName = propertyName;
            this.propertyTypeName = propertyTypeName;
        }
    }
}
