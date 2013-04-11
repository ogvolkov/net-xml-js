using System.Web;

namespace serializersGenerator.Asserts
{
    public partial class Guid
    {
        private readonly string objectName;

        private readonly string propertyName;

        private readonly string value;

        public Guid(string objectName, string propertyName, object value)
        {
            this.objectName = objectName;
            this.propertyName = propertyName;
            this.value = value.ToString();
        }
    }
}
