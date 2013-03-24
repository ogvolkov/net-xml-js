using System;

namespace serializersGenerator.Asserts
{
    public partial class Date
    {
        private readonly string objectName;

        private readonly string propertyName;

        private readonly string value;

        public Date(string objectName, string propertyName, object value)
        {
            this.objectName = objectName;
            this.propertyName = propertyName;            

            var unixTime = (((DateTime)value).ToUniversalTime() - new DateTime(1970, 1, 1)).TotalMilliseconds;
            this.value = string.Format("new Date({0})", Math.Truncate(unixTime));
        }
    }
}
