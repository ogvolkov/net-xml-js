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

        private ObjectBuildPath _buildPath;

        private Func<Type, ObjectBuildPath, object> _defaultInstanceFactory;

        public PropertyValueBuilder(int index, Func<Type, ObjectBuildPath, object> instanceFactory, Action forkHandler, ObjectBuildPath buildPath)
        {
            this.index = index;
            fork = -1;
            _defaultInstanceFactory = instanceFactory;
            _buildPath = buildPath;
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
                if (_buildPath.Count(propertyType) > 1)
                {
                    // avoid stack overflow due to circle in object creation process
                    propertyValue = null;
                }
                else
                {
                    propertyValue = _defaultInstanceFactory(propertyType, _buildPath.With(propertyType));
                }
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

                object collection = null;

                try
                {
                    collection = Activator.CreateInstance(propertyType);

                    var itemType = collectionType.GetGenericArguments().First();
                    for (int i = 0; i < 2; i++)
                    {
                        object item;
                        if (_buildPath.Count(propertyType) > 1)
                        {
                            // avoid stack overflow due to circle in object creation process
                            item = null;
                        }
                        else
                        {
                            item = _defaultInstanceFactory(itemType, _buildPath.With(itemType));
                        }
                        addMethod.Invoke(collection, new[] { item });
                    }

                }
                catch (Exception exception)
                {
                    Console.WriteLine("Cannot instantiate collection of type {0}, exception {1}", propertyType, exception);
                }
               
                propertyValue = collection;
            }
            else
            {
                propertyValue = null;
            }
        }

        public void VisitObject(string propertyName, Type propertyType)
        {
            if (index == 0)
            {
                onForkFound();
            }
            fork++;

            if ((index & (1 << fork)) != 0)
            {
                propertyValue = 10;
            }
            else
            {
                propertyValue = "aaa";
            }
        }

        public void VisitEnum(string propertyName, Type propertyType)
        {
            var enumValues = Enum.GetValues(propertyType);
                        
            if (index == 0)
            {
                onForkFound();
            }
            fork++;

            int valueIndex = 0;
            if ((index & (1 << fork)) != 0)
            {
                valueIndex = 0;
            }
            else
            {
                valueIndex = (enumValues.Length > 1) ? 1 : 0;
            }

            propertyValue = enumValues.GetValue(valueIndex);
        }

        public void VisitNullableInteger(string propertyName)
        {
            if (index == 0)
            {
                onForkFound();
            }
            fork++;

            if ((index & (1 << fork)) != 0)
            {
                propertyValue = 256;
            }
            else
            {
                propertyValue = null;
            }
        }

        public void VisitUnsupported(string propertyName, Type propertyType)
        {
            propertyValue = null;
        }
    }
}
