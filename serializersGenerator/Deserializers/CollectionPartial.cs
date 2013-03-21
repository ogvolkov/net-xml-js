namespace serializersGenerator.Deserializers
{
    public partial class Collection
    {
        private readonly string propertyName;

        private readonly string itemTypeName;

        public Collection(string propertyName, string itemTypeName)
        {
            this.propertyName = propertyName;
            this.itemTypeName = itemTypeName;
        }
    }
}
