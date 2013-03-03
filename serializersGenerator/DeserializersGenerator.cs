using System;
using System.IO;

namespace serializersGenerator
{
    public class DeserializersGenerator
    {
        private TextWriter _codeWriter;

        public DeserializersGenerator(TextWriter codeWriter)
        {
            _codeWriter = codeWriter;
        }

        public void Start()
        {
            _codeWriter.WriteLine(@"
var netXmlSerializer = (function(){
// initialize cross-browser xml parser
    var parseXml = function() {
        if (typeof window.DOMParser != ""undefined"") {
            return function(xmlStr) {
                return ( new window.DOMParser() ).parseFromString(xmlStr, ""text/xml"");
            };
        } else if (typeof window.ActiveXObject != ""undefined"" &&  new window.ActiveXObject(""Microsoft.XMLDOM"")) {
            return function(xmlStr) {
                var xmlDoc = new window.ActiveXObject(""Microsoft.XMLDOM"");
                xmlDoc.async = ""false"";
                xmlDoc.loadXML(xmlStr);
                return xmlDoc;
            };
        } else {
            throw new Error(""No XML parser found"");
        }
    }();
    return {");
        }

        public void AddType(Type type)
        {
            _codeWriter.WriteLine(
                @"      deserialize{0}: function deserialize(xml) {{
            var xmlDoc = parseXml(xml);
            var result = {{}};", type.Name);
            
            foreach (var property in type.GetProperties())
            {
                var propertyType = property.PropertyType;

                var getPropertyFromXml = string.Format("xmlDoc.getElementsByTagName(\"{0}\")[0].textContent", property.Name);

                if (propertyType == typeof(DateTime))
                {
                    _codeWriter.WriteLine(@"
            result.{0} = new Date(Date.parse({1}));", property.Name, getPropertyFromXml);
                }
                else if (propertyType == typeof(int))
                {
                    _codeWriter.WriteLine(@"
            result.{0} = parseInt({1});", property.Name, getPropertyFromXml);
                }
                else
                {
                    _codeWriter.WriteLine(@"
            result.{0} = {1};", property.Name, getPropertyFromXml);
                }
            }
            
            _codeWriter.WriteLine(@"
            return result;         
        }},", type.Name);
        }
        
        public void Finish()
        {
            _codeWriter.WriteLine("    }");
            _codeWriter.WriteLine("})();");
        }
    }
}

