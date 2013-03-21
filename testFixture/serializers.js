











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
		function deserializeNodeSimple(node) {				
				var result = {};
					 result.Name = node.getElementsByTagName("Name")[0].textContent;
				return result;
		}

		function deserializeNodeSampleIntDate(node) {				
				var result = {};
					result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
		result.Date = new Date(Date.parse(node.getElementsByTagName("Date")[0].textContent));
			return result;
		}

		function deserializeNodeReferenceSubordinate(node) {				
				var result = {};
					result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
		 result.Name = node.getElementsByTagName("Name")[0].textContent;
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

		function deserializeNodeOrderLine(node) {				
				var result = {};
					result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
		result.Price = parseInt(node.getElementsByTagName("Price")[0].textContent);
		result.Quantity = parseInt(node.getElementsByTagName("Quantity")[0].textContent);
			return result;
		}

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

	    return {
					deserializeSimple: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSimple(xmlDoc);
					},
					deserializeSampleIntDate: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSampleIntDate(xmlDoc);
					},
					deserializeReferenceSubordinate: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeReferenceSubordinate(xmlDoc);
					},
					deserializeReferenceMain: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeReferenceMain(xmlDoc);
					},
					deserializeOrderLine: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeOrderLine(xmlDoc);
					},
					deserializeOrder: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeOrder(xmlDoc);
					},
			}
})();