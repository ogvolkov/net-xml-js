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
		function deserializeNodeOrder(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Lines = [];
var _LinesCollectionNode = node.getElementsByTagName("Lines");
if (_LinesCollectionNode != null && _LinesCollectionNode.length > 0) {
	var _LinesNodes = _LinesCollectionNode[0].getElementsByTagName("OrderLine");
	var _LinesItem;	
	for (i = 0; i < _LinesNodes.length; i++)
	{
		_LinesItem = deserializeNodeOrderLine(_LinesNodes[i]);
			result.Lines.push(_LinesItem);
	}						
}
else{
	result.Lines = null;
}
			return result;
		}

		function deserializeNodeSimple(node) {				
				var result = {};
			result.Name = node.getElementsByTagName("Name")[0].textContent;
			return result;
		}

		function deserializeNodeSelfRef(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
var _ReferenceNodes = node.getElementsByTagName("Reference");
if (_ReferenceNodes && _ReferenceNodes.length > 0) {
	result.Reference = deserializeNodeSelfRef(_ReferenceNodes[0]);
}
else{
	result.Reference = null;
}
			return result;
		}

		function deserializeNodeReferenceSubordinate(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
			return result;
		}

		function deserializeNodeSampleIntDate(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Date = new Date(Date.parse(node.getElementsByTagName("Date")[0].textContent));
			return result;
		}

		function deserializeNodeReferenceMain(node) {				
				var result = {};
			var _ReferenceNodes = node.getElementsByTagName("Reference");
if (_ReferenceNodes && _ReferenceNodes.length > 0) {
	result.Reference = deserializeNodeReferenceSubordinate(_ReferenceNodes[0]);
}
else{
	result.Reference = null;
}
			return result;
		}

		function deserializeNodeWithObjectProperty(node) {				
				var result = {};
			result.Name = node.getElementsByTagName("Name")[0].textContent;
var ValueNode = node.getElementsByTagName("Value")[0];
var ValueNodeType = ValueNode.getAttribute("xsi:type");

switch (ValueNodeType) {
	case "xsd:string":
		result.Value = ValueNode.textContent;
		break;
	case "xsd:int":
		result.Value = parseInt(ValueNode.textContent);
		break;
}
			return result;
		}

		function deserializeNodeOrderLine(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Price = parseInt(node.getElementsByTagName("Price")[0].textContent);
result.Quantity = parseInt(node.getElementsByTagName("Quantity")[0].textContent);
			return result;
		}

		function deserializeNodeTestEnum(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeWithEnumProperty(node) {				
				var result = {};
			result.Selector = node.getElementsByTagName("Selector")[0].textContent;
			return result;
		}

	    return {
					deserializeOrder: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeOrder(xmlDoc);
					},
					deserializeSimple: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSimple(xmlDoc);
					},
					deserializeSelfRef: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSelfRef(xmlDoc);
					},
					deserializeReferenceSubordinate: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeReferenceSubordinate(xmlDoc);
					},
					deserializeSampleIntDate: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSampleIntDate(xmlDoc);
					},
					deserializeReferenceMain: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeReferenceMain(xmlDoc);
					},
					deserializeWithObjectProperty: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeWithObjectProperty(xmlDoc);
					},
					deserializeOrderLine: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeOrderLine(xmlDoc);
					},
					deserializeTestEnum: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeTestEnum(xmlDoc);
					},
					deserializeWithEnumProperty: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeWithEnumProperty(xmlDoc);
					},
			}
})();