namespace serializersGenerator.Asserts
{
    public partial class Boolean
    {
        private readonly string objectName;

        private readonly string propertyName;

        private readonly string value;

        public Boolean(string objectName, string propertyName, object value)
        {
            this.objectName = objectName;
            this.propertyName = propertyName;
            this.value = (bool)value ? "true": "false";
        }
    }
}
