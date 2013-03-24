using System.Web;

namespace serializersGenerator.Asserts
{
    public partial class String
    {
        private readonly string objectName;

        private readonly string propertyName;

        private readonly string value;

        public String(string objectName, string propertyName, object value)
        {
            this.objectName = objectName;
            this.propertyName = propertyName;
            this.value = HttpUtility.JavaScriptStringEncode((string)value);
        }
    }
}
