namespace serializersGenerator.Deserializers
{
    public partial class Enum
    {
        private readonly string propertyName;

        private readonly string enumName;

        public Enum(string propertyName, string enumName)
        {
            this.propertyName = propertyName;
            this.enumName = enumName;
        }
    }
}
