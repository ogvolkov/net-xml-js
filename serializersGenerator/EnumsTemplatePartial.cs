using System.Collections.Generic;
using System;
namespace serializersGenerator
{
    partial class EnumsTemplate
    {
        private readonly IEnumerable<Type> enumTypes;

        public EnumsTemplate(IEnumerable<Type> enumTypes)
        {
            this.enumTypes = enumTypes;
        }
    }
}
