
var netXmlSerializer = (function(){
// initialize cross-browser xml parser
    var parseXml = function() {
        if (typeof window.DOMParser != "undefined") {
            return function(xmlStr) {
                return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
            };
        } else if (typeof window.ActiveXObject != "undefined" &&  new window.ActiveXObject("Microsoft.XMLDOM")) {
            return function(xmlStr) {
                var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = "false";
                xmlDoc.loadXML(xmlStr);
                return xmlDoc;
            };
        } else {
            throw new Error("No XML parser found");
        }
    }();
    return {
      deserializeSimple: function deserialize(xml) {
            var xmlDoc = parseXml(xml);
            var result = {};

            result.Name = xmlDoc.getElementsByTagName("Name")[0].textContent;

            return result;         
        },
      deserializeSampleIntDate: function deserialize(xml) {
            var xmlDoc = parseXml(xml);
            var result = {};

            result.Id = parseInt(xmlDoc.getElementsByTagName("Id")[0].textContent);

            result.Date = new Date(Date.parse(xmlDoc.getElementsByTagName("Date")[0].textContent));

            return result;         
        },
    }
})();
