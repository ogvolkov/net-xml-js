using System;
using System.IO;
using System.Reflection;
using System.Linq;

namespace serializersGenerator
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			if (args.Length > 0)
			{
				string assemblyPath = args [0];
				var assembly = Assembly.LoadFrom(assemblyPath);

				using (var unitTestsWriter = new StreamWriter("tests.js"))
				using (var serializersWriter = new StreamWriter("serializers.js"))                
				{										
				    var typesInfo = new TypesInfo();
                    var types = assembly.GetTypes();
				
					foreach (var type in types)
					{
                        if (type.IsInterface || type.IsAbstract || type.IsEnum) continue;

						Console.WriteLine("Processing type {0}", type.Name);						
					    typesInfo.AddType(type);
					}

                    var serializersTemplate = new SerializersTemplate(typesInfo);
				    var text = serializersTemplate.TransformText();
                    serializersWriter.Write(text);                    

				    var unitTestsTemplate = new UnitTestsTemplate(typesInfo, new SampleDataBuilder(types));
				    text = unitTestsTemplate.TransformText();
                    unitTestsWriter.Write(text);

                    using (var enumWriter = new StreamWriter("enums.js"))
                    {
                        var enumTypes = types.Where(t => t.IsEnum);
                        var enumsTemplate = new EnumsTemplate(enumTypes);
                        text = enumsTemplate.TransformText();
                        enumWriter.Write(text);
                    }
				}
			}
			else
			{
				Console.WriteLine("Code generator for Javascript serializers from .NET contracts assembly");
				var exeFileName = System.Reflection.Assembly.GetEntryAssembly().Location;
				Console.WriteLine("Usage: {0} <assembly file name>", Path.GetFileNameWithoutExtension(exeFileName));
			}
		}
	}
}
