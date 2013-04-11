namespace serializersGenerator.Asserts
{
    public partial class Decimal
    {
        private readonly string objectName;

        private readonly string propertyName;

        private readonly object value;

        public Decimal(string objectName, string propertyName, object value)
        {
            this.objectName = objectName;
            this.propertyName = propertyName;
            this.value = value;
        }
    }
}
