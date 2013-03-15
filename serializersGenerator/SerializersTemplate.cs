﻿// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version: 10.0.0.0
//  
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------
namespace serializersGenerator
{
    using System.Linq;
    using System;
    
    
    #line 1 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
    [System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.VisualStudio.TextTemplating", "10.0.0.0")]
    public partial class SerializersTemplate : SerializersTemplateBase
    {
        #region ToString Helpers
        /// <summary>
        /// Utility class to produce culture-oriented representation of an object as a string.
        /// </summary>
        public class ToStringInstanceHelper
        {
            private System.IFormatProvider formatProviderField  = global::System.Globalization.CultureInfo.InvariantCulture;
            /// <summary>
            /// Gets or sets format provider to be used by ToStringWithCulture method.
            /// </summary>
            public System.IFormatProvider FormatProvider
            {
                get
                {
                    return this.formatProviderField ;
                }
                set
                {
                    if ((value != null))
                    {
                        this.formatProviderField  = value;
                    }
                }
            }
            /// <summary>
            /// This is called from the compile/run appdomain to convert objects within an expression block to a string
            /// </summary>
            public string ToStringWithCulture(object objectToConvert)
            {
                if ((objectToConvert == null))
                {
                    throw new global::System.ArgumentNullException("objectToConvert");
                }
                System.Type t = objectToConvert.GetType();
                System.Reflection.MethodInfo method = t.GetMethod("ToString", new System.Type[] {
                            typeof(System.IFormatProvider)});
                if ((method == null))
                {
                    return objectToConvert.ToString();
                }
                else
                {
                    return ((string)(method.Invoke(objectToConvert, new object[] {
                                this.formatProviderField })));
                }
            }
        }
        private ToStringInstanceHelper toStringHelperField = new ToStringInstanceHelper();
        public ToStringInstanceHelper ToStringHelper
        {
            get
            {
                return this.toStringHelperField;
            }
        }
        #endregion
        public virtual string TransformText()
        {
            this.GenerationEnvironment = null;
            this.Write(@"
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
	");
            
            #line 22 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
 
		var types = _typesInfo.Types;
			
		foreach (var type in types)
		{
            
            #line default
            #line hidden
            this.Write("\tfunction deserializeNode");
            
            #line 27 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(type.Name));
            
            #line default
            #line hidden
            this.Write("(node) {\t\t\t\t\r\n\t\t\t\tvar result = {};\r\n\t\t\t");
            
            #line 29 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
 foreach (var property in type.GetProperties())
			{
				var propertyType = property.PropertyType;
				if (propertyType == typeof(DateTime))
				{
            
            #line default
            #line hidden
            this.Write("\t\tresult.");
            
            #line 34 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write(" = new Date(Date.parse(node.getElementsByTagName(\"");
            
            #line 34 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write("\")[0].textContent));\r\n                ");
            
            #line 35 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
}
                else if (propertyType == typeof(int))
                {
            
            #line default
            #line hidden
            this.Write("                    \r\n        result.");
            
            #line 38 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write(" = parseInt(node.getElementsByTagName(\"");
            
            #line 38 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write("\")[0].textContent);\r\n                ");
            
            #line 39 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
}
				else if (types.Contains(propertyType))
                {
            
            #line default
            #line hidden
            this.Write("\t\t\t\t\tvar _");
            
            #line 42 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write("Nodes = node.getElementsByTagName(\"");
            
            #line 42 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write("\");\r\n\t\t\t\t\tif (_");
            
            #line 43 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write("Nodes && _");
            
            #line 43 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write("Nodes.length > 0) {\r\n\t\tresult.");
            
            #line 44 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write(" = deserializeNode");
            
            #line 44 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(propertyType.Name));
            
            #line default
            #line hidden
            this.Write("(_");
            
            #line 44 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write("Nodes[0]);\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse{\r\n\t\t\t\t\t\tresult.");
            
            #line 47 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write(" = null;\r\n\t\t\t\t\t}\r\n\t\t\t\t");
            
            #line 49 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
}
                else
                {
					var collectionType = TypesInfo.TryGetCollectionType(propertyType);					

					if (collectionType != null)
                    {
						var itemType = collectionType.GetGenericArguments().First();
				
            
            #line default
            #line hidden
            this.Write("\t\t\t\t\tresult.");
            
            #line 58 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write(" = [];\r\n\t\t\t\t\tvar _");
            
            #line 59 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write("Nodes = node.getElementsByTagName(\"");
            
            #line 59 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write("\")[0].getElementsByTagName(\"");
            
            #line 59 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(itemType.Name));
            
            #line default
            #line hidden
            this.Write("\");\r\n\t\t\t\t\tvar _");
            
            #line 60 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write("Item;\r\n\t\t\t\t\tfor (i = 0; i < _");
            
            #line 61 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write("Nodes.length; i++)\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t_");
            
            #line 63 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write("Item = deserializeNode");
            
            #line 63 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(itemType.Name));
            
            #line default
            #line hidden
            this.Write("(_");
            
            #line 63 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write("Nodes[i]);\r\n\t\t\t\t\t\t result.");
            
            #line 64 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write(".push(_");
            
            #line 64 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write("Item);\r\n\t\t\t\t\t}\t\t\t\t\t\r\n\t\t\t\t");
            
            #line 66 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"

                    }
					else
					{
				
            
            #line default
            #line hidden
            this.Write("        result.");
            
            #line 71 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write(" = node.getElementsByTagName(\"");
            
            #line 71 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write("\")[0].textContent;\r\n                ");
            
            #line 72 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
}
				}
			}
            
            #line default
            #line hidden
            this.Write("\t\t\treturn result;\r\n\t\t}\r\n\r\n\t");
            
            #line 78 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"

	}			
	
            
            #line default
            #line hidden
            this.Write("    return {\r\n\t\t");
            
            #line 82 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"

			foreach (var type in types)
		{
            
            #line default
            #line hidden
            this.Write("\t\t\tdeserialize");
            
            #line 85 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(type.Name));
            
            #line default
            #line hidden
            this.Write(": function(xml) {\r\n\t\t\t\t\t\tvar xmlDoc = parseXml(xml);\t\t\t\t\t\r\n\t\t\t\t\t\treturn deseriali" +
                    "zeNode");
            
            #line 87 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(type.Name));
            
            #line default
            #line hidden
            this.Write("(xmlDoc);\r\n\t\t\t\t\t},\r\n\t\t");
            
            #line 89 "D:\development\net-xml-js\serializersGenerator\SerializersTemplate.tt"

		}			
		
            
            #line default
            #line hidden
            this.Write("\t}\r\n})();");
            return this.GenerationEnvironment.ToString();
        }
    }
    
    #line default
    #line hidden
    #region Base class
    /// <summary>
    /// Base class for this transformation
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.VisualStudio.TextTemplating", "10.0.0.0")]
    public class SerializersTemplateBase
    {
        #region Fields
        private global::System.Text.StringBuilder generationEnvironmentField;
        private global::System.CodeDom.Compiler.CompilerErrorCollection errorsField;
        private global::System.Collections.Generic.List<int> indentLengthsField;
        private string currentIndentField = "";
        private bool endsWithNewline;
        private global::System.Collections.Generic.IDictionary<string, object> sessionField;
        #endregion
        #region Properties
        /// <summary>
        /// The string builder that generation-time code is using to assemble generated output
        /// </summary>
        protected System.Text.StringBuilder GenerationEnvironment
        {
            get
            {
                if ((this.generationEnvironmentField == null))
                {
                    this.generationEnvironmentField = new global::System.Text.StringBuilder();
                }
                return this.generationEnvironmentField;
            }
            set
            {
                this.generationEnvironmentField = value;
            }
        }
        /// <summary>
        /// The error collection for the generation process
        /// </summary>
        public System.CodeDom.Compiler.CompilerErrorCollection Errors
        {
            get
            {
                if ((this.errorsField == null))
                {
                    this.errorsField = new global::System.CodeDom.Compiler.CompilerErrorCollection();
                }
                return this.errorsField;
            }
        }
        /// <summary>
        /// A list of the lengths of each indent that was added with PushIndent
        /// </summary>
        private System.Collections.Generic.List<int> indentLengths
        {
            get
            {
                if ((this.indentLengthsField == null))
                {
                    this.indentLengthsField = new global::System.Collections.Generic.List<int>();
                }
                return this.indentLengthsField;
            }
        }
        /// <summary>
        /// Gets the current indent we use when adding lines to the output
        /// </summary>
        public string CurrentIndent
        {
            get
            {
                return this.currentIndentField;
            }
        }
        /// <summary>
        /// Current transformation session
        /// </summary>
        public virtual global::System.Collections.Generic.IDictionary<string, object> Session
        {
            get
            {
                return this.sessionField;
            }
            set
            {
                this.sessionField = value;
            }
        }
        #endregion
        #region Transform-time helpers
        /// <summary>
        /// Write text directly into the generated output
        /// </summary>
        public void Write(string textToAppend)
        {
            if (string.IsNullOrEmpty(textToAppend))
            {
                return;
            }
            // If we're starting off, or if the previous text ended with a newline,
            // we have to append the current indent first.
            if (((this.GenerationEnvironment.Length == 0) 
                        || this.endsWithNewline))
            {
                this.GenerationEnvironment.Append(this.currentIndentField);
                this.endsWithNewline = false;
            }
            // Check if the current text ends with a newline
            if (textToAppend.EndsWith(global::System.Environment.NewLine, global::System.StringComparison.CurrentCulture))
            {
                this.endsWithNewline = true;
            }
            // This is an optimization. If the current indent is "", then we don't have to do any
            // of the more complex stuff further down.
            if ((this.currentIndentField.Length == 0))
            {
                this.GenerationEnvironment.Append(textToAppend);
                return;
            }
            // Everywhere there is a newline in the text, add an indent after it
            textToAppend = textToAppend.Replace(global::System.Environment.NewLine, (global::System.Environment.NewLine + this.currentIndentField));
            // If the text ends with a newline, then we should strip off the indent added at the very end
            // because the appropriate indent will be added when the next time Write() is called
            if (this.endsWithNewline)
            {
                this.GenerationEnvironment.Append(textToAppend, 0, (textToAppend.Length - this.currentIndentField.Length));
            }
            else
            {
                this.GenerationEnvironment.Append(textToAppend);
            }
        }
        /// <summary>
        /// Write text directly into the generated output
        /// </summary>
        public void WriteLine(string textToAppend)
        {
            this.Write(textToAppend);
            this.GenerationEnvironment.AppendLine();
            this.endsWithNewline = true;
        }
        /// <summary>
        /// Write formatted text directly into the generated output
        /// </summary>
        public void Write(string format, params object[] args)
        {
            this.Write(string.Format(global::System.Globalization.CultureInfo.CurrentCulture, format, args));
        }
        /// <summary>
        /// Write formatted text directly into the generated output
        /// </summary>
        public void WriteLine(string format, params object[] args)
        {
            this.WriteLine(string.Format(global::System.Globalization.CultureInfo.CurrentCulture, format, args));
        }
        /// <summary>
        /// Raise an error
        /// </summary>
        public void Error(string message)
        {
            System.CodeDom.Compiler.CompilerError error = new global::System.CodeDom.Compiler.CompilerError();
            error.ErrorText = message;
            this.Errors.Add(error);
        }
        /// <summary>
        /// Raise a warning
        /// </summary>
        public void Warning(string message)
        {
            System.CodeDom.Compiler.CompilerError error = new global::System.CodeDom.Compiler.CompilerError();
            error.ErrorText = message;
            error.IsWarning = true;
            this.Errors.Add(error);
        }
        /// <summary>
        /// Increase the indent
        /// </summary>
        public void PushIndent(string indent)
        {
            if ((indent == null))
            {
                throw new global::System.ArgumentNullException("indent");
            }
            this.currentIndentField = (this.currentIndentField + indent);
            this.indentLengths.Add(indent.Length);
        }
        /// <summary>
        /// Remove the last indent that was added with PushIndent
        /// </summary>
        public string PopIndent()
        {
            string returnValue = "";
            if ((this.indentLengths.Count > 0))
            {
                int indentLength = this.indentLengths[(this.indentLengths.Count - 1)];
                this.indentLengths.RemoveAt((this.indentLengths.Count - 1));
                if ((indentLength > 0))
                {
                    returnValue = this.currentIndentField.Substring((this.currentIndentField.Length - indentLength));
                    this.currentIndentField = this.currentIndentField.Remove((this.currentIndentField.Length - indentLength));
                }
            }
            return returnValue;
        }
        /// <summary>
        /// Remove any indentation
        /// </summary>
        public void ClearIndent()
        {
            this.indentLengths.Clear();
            this.currentIndentField = "";
        }
        #endregion
    }
    #endregion
}
