
	test("Deserializing Simple", function() {
		var xml = "<Simple xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Name>Test</Name></Simple>";

		var result = netXmlSerializer.deserializeSimple(xml);
		equal(result.Name, "Test");
	
	});
	test("Deserializing SampleIntDate", function() {
		var xml = "<SampleIntDate xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>42</Id><Date>2013-03-15T11:00:51.0700322+02:00</Date></SampleIntDate>";

		var result = netXmlSerializer.deserializeSampleIntDate(xml);
		equal(result.Id, 42);
deepEqual(result.Date, new Date(1363338051070));
	
	});
	test("Deserializing ReferenceSubordinate", function() {
		var xml = "<ReferenceSubordinate xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>42</Id><Name>Test</Name></ReferenceSubordinate>";

		var result = netXmlSerializer.deserializeReferenceSubordinate(xml);
		equal(result.Id, 42);
equal(result.Name, "Test");
	
	});
	test("Deserializing ReferenceMain", function() {
		var xml = "<ReferenceMain xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Reference><Id>42</Id><Name>Test</Name></Reference></ReferenceMain>";

		var result = netXmlSerializer.deserializeReferenceMain(xml);
		equal(result.Reference.Id, 42);
equal(result.Reference.Name, "Test");
	
	});
	test("Deserializing OrderLine", function() {
		var xml = "<OrderLine xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>42</Id><Price>42</Price><Quantity>42</Quantity></OrderLine>";

		var result = netXmlSerializer.deserializeOrderLine(xml);
		equal(result.Id, 42);
equal(result.Price, 42);
equal(result.Quantity, 42);
	
	});
	test("Deserializing Order", function() {
		var xml = "<Order xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>42</Id><Lines><OrderLine><Id>42</Id><Price>42</Price><Quantity>42</Quantity></OrderLine><OrderLine><Id>42</Id><Price>42</Price><Quantity>42</Quantity></OrderLine></Lines></Order>";

		var result = netXmlSerializer.deserializeOrder(xml);
		equal(result.Id, 42);
equal(result.Lines[0].Id, 42);
equal(result.Lines[0].Price, 42);
equal(result.Lines[0].Quantity, 42);
equal(result.Lines[1].Id, 42);
equal(result.Lines[1].Price, 42);
equal(result.Lines[1].Quantity, 42);
	
	});

