using System;
using System.IO;
using System.Web;
using System.Xml.Serialization;
using System.Xml;

namespace serializersGenerator
{
    public class UnitTestsGenerator
    {
        private TextWriter _unitTestsWriter;

        private SampleDataBuilder _sampleDataBuilder;

        public UnitTestsGenerator(TextWriter unitTestsWriter)
        {
            _unitTestsWriter = unitTestsWriter;
            _sampleDataBuilder = new SampleDataBuilder();
        }

        public void AddType(Type type)
        {
            var instance = _sampleDataBuilder.CreateSampleInstance(type);       
            
            _unitTestsWriter.WriteLine("test(\"Deserializing {0}\", function() {{", type.Name);
            WriteXmlOfSampleInstance(type, instance);
            
            _unitTestsWriter.WriteLine("    var result = netXmlSerializer.deserialize{0}(xml)", type.Name);
            
            foreach (var property in type.GetProperties())
            {
                object value = property.GetValue(instance, null);
                object encodedValue = value;
                
                var propertyType = property.PropertyType;
                if (propertyType == typeof(string))
                {
                    var jsEncodedString = HttpUtility.JavaScriptStringEncode((string)value);
                    encodedValue = string.Format("\"{0}\"", jsEncodedString);
                }
                else if (propertyType == typeof(DateTime))
                {
                    var unixTime = (((DateTime)value).ToUniversalTime() - new DateTime(1970, 1, 1)).TotalMilliseconds;
                    encodedValue = string.Format("new Date({0})", Math.Truncate(unixTime));
                }
                
                _unitTestsWriter.WriteLine("    deepEqual(result.{0}, {1});", property.Name, encodedValue);
            }
            
            _unitTestsWriter.WriteLine("});");
        }

        private void WriteXmlOfSampleInstance(Type type, object instance)
        {
            _unitTestsWriter.Write("    var xml = \"");
            var serializer = new XmlSerializer(type);
            var escapingWriter = new EscapingTextWriter(_unitTestsWriter);
            XmlWriter xmlWriter = XmlWriter.Create(escapingWriter, new XmlWriterSettings { OmitXmlDeclaration = true });
            serializer.Serialize(xmlWriter, instance);
            _unitTestsWriter.WriteLine("\"");
        }
    }
}

