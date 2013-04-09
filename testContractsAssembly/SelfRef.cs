namespace testContractsAssembly
{
    public class SelfRef
    {
        public int Id { get; set; }

        public SelfRef Reference { get; set; }
    }
}
