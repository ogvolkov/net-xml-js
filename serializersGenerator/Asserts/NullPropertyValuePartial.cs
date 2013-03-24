namespace serializersGenerator.Asserts
{
    public partial class NullPropertyValue
    {
        private readonly string objectName;

        private readonly string propertyName;

        public NullPropertyValue(string objectName, string propertyName)
        {
            this.objectName = objectName;
            this.propertyName = propertyName;
        }
    }
}
