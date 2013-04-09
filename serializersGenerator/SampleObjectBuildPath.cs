using System.Collections.Generic;
using System;
namespace serializersGenerator
{
    public class ObjectBuildPath
    {
        private Type _lastType;

        private ObjectBuildPath _next;

        public ObjectBuildPath(Type type)
        {
            _lastType = type;
            _next = null;
        }        
        
        internal ObjectBuildPath With(Type relationType)
        {
            var newPath = new ObjectBuildPath(relationType);
            newPath._next = this;
            return newPath;
        }

        internal int Count(Type relationType)
        {
            int count = 0;
            for(var currentPath = this; currentPath != null; currentPath = currentPath._next)
            {
                if (currentPath._lastType == relationType) ++count;
            }

            return count;
        }
    }
}
