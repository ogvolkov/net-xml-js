
using System;
using System.Collections.Generic;

namespace serializersGenerator
{
    public class TypesInfo
    {
        private readonly ICollection<Type> _types = new List<Type>();

        public IEnumerable<Type> Types
        {
            get { return _types; }
        }

        public void AddType(Type type)
        {         
            _types.Add(type);
        }
    }
}
