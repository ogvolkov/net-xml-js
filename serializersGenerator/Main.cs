using System;
using System.IO;
using System.Reflection;

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
				using (var codeWriter = new StreamWriter("serializers.js"))
				{
					var deserializerGenerator = new DeserializersGenerator(codeWriter);
					var unitTestsGenerator = new UnitTestsGenerator(unitTestsWriter);
					deserializerGenerator.Start();
					foreach (var type in assembly.GetTypes())
					{
						Console.WriteLine("Processing type {0}", type.Name);
						deserializerGenerator.AddType(type);
						unitTestsGenerator.AddType(type);
					}
					deserializerGenerator.Finish();
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
