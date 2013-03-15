
using System;
using System.Collections.Generic;
using System.Linq;

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

        public static Type TryGetCollectionType(Type type)
        {
            return type.GetInterfaces().FirstOrDefault(t => t.IsGenericType && t.GetGenericTypeDefinition() == typeof(ICollection<>));
        }
    }
}
