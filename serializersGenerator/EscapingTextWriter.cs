using System;
using System.IO;

namespace serializersGenerator
{
	public class EscapingTextWriter: TextWriter
	{
		private TextWriter _underlyingWriter;

		public EscapingTextWriter(TextWriter underlyingWriter)
		{
			_underlyingWriter = underlyingWriter;
		}

		public override void Write(char value)
		{
			if (value == '"')
			{
				_underlyingWriter.Write("\\\"");
			}
			else
			{
				_underlyingWriter.Write(value);
			}
		}

		public override System.Text.Encoding Encoding
		{
			get { return _underlyingWriter.Encoding; }
		}
	}
}

