using System;
using System.Collections.Generic;
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
                var typesInfo = new TypesInfo();
			    var allTypes = new List<Type>();
                    
			    foreach (var assemblyPath in args)
			    {
                    var assembly = Assembly.LoadFrom(assemblyPath);                 
                    allTypes.AddRange(assembly.GetTypes());
			    }

				using (var unitTestsWriter = new StreamWriter("tests.js"))
				using (var serializersWriter = new StreamWriter("serializers.js"))                
				{														    
                    var usableTypes = allTypes.Where(t => t.IsPublic
                        && !t.IsInterface
                        && !t.IsAbstract
                        && !t.IsEnum
                        && !t.IsGenericType
                        && t.GetConstructor(Type.EmptyTypes) != null).ToList();

                    foreach (var type in usableTypes)
					{
                        Console.WriteLine("Processing type {0}", type.Name);						
					    typesInfo.AddType(type);
					}

                    var serializersTemplate = new SerializersTemplate(typesInfo);
				    var text = serializersTemplate.TransformText();
                    serializersWriter.Write(text);

                    var unitTestsTemplate = new UnitTestsTemplate(typesInfo, new SampleDataBuilder(usableTypes));
				    text = unitTestsTemplate.TransformText();
                    unitTestsWriter.Write(text);

                    using (var enumWriter = new StreamWriter("enums.js"))
                    {
                        var enumTypes = allTypes.Where(t => t.IsEnum);
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
				Console.WriteLine("Usage: {0} <assembly file name>...", Path.GetFileNameWithoutExtension(exeFileName));
			}
		}
	}
}
