using System.Collections.Generic;

namespace testContractsAssembly
{
    public class Order
    {
        public int Id { get; set; }

        public List<OrderLine> Lines { get; set; }
    }
}
