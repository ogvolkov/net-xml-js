namespace serializersGenerator.Asserts
{
    public partial class NullableInteger
    {
        private readonly string objectName;

        private readonly string propertyName;

        private readonly object value;

        public NullableInteger(string objectName, string propertyName, object value)
        {
            this.objectName = objectName;
            this.propertyName = propertyName;
            this.value = value;
        }
    }
}
