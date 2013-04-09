using System.Web;

namespace serializersGenerator.Asserts
{
    public partial class Enum
    {
        private readonly string objectName;

        private readonly string propertyName;

        private readonly string value;

        private readonly string enumName;

        public Enum(string objectName, string propertyName, string enumName, object value)
        {
            this.objectName = objectName;
            this.propertyName = propertyName;
            this.value = value.ToString();
            this.enumName = enumName;
        }
    }
}
