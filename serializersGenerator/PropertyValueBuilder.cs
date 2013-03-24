using System;
using System.Linq;

namespace serializersGenerator
{
    public class PropertyValueBuilder: IPropertyVisitor
    {
        private int index;

        private int fork;

        private Action onForkFound;

        private object propertyValue;

        private static int intValue = 42;

        public object Value
        {
            get { return propertyValue; }            
        }

        private Func<Type, object> _defaultInstanceFactory;

        public PropertyValueBuilder(int index, Func<Type, object> instanceFactory, Action forkHandler)
        {
            this.index = index;
            fork = -1;
            _defaultInstanceFactory = instanceFactory;
            onForkFound = forkHandler;
        }       

        public void VisitString(string propertyName)
        {
            propertyValue = "Test";
        }

        public void VisitInteger(string propertyName)
        {
            propertyValue = intValue++;
        }

        public void VisitDate(string propertyName)
        {
            propertyValue = DateTime.Now;
        }

        public void VisitReference(string propertyName, Type propertyType)
        {
            if (index == 0)
            {
                onForkFound();
            }
            fork++;

            if ((index & (1 << fork)) == 0)
            {
                propertyValue = _defaultInstanceFactory(propertyType);
            }
            else
            {
                propertyValue = null;
            }
        }

        public void VisitCollection(string propertyName, Type propertyType, Type collectionType)
        {
            if (index == 0)
            {
                onForkFound();
            }
            fork++;

            if ((index & (1 << fork)) != 0)
            {                
                var addMethod = collectionType.GetMethod("Add");

                var collection = Activator.CreateInstance(propertyType);

                var itemType = collectionType.GetGenericArguments().First();
                for (int i = 0; i < 2; i++)
                {
                    var item = _defaultInstanceFactory(itemType);
                    addMethod.Invoke(collection, new[] { item });
                }

                propertyValue = collection;
            }
            else
            {
                propertyValue = null;
            }
        }
    }
}
