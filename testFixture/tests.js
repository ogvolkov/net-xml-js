
	test("Deserializing Simple, sample 0", function() {
		var xml = "<Simple xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Name>Test</Name></Simple>";

		var result = netXmlSerializer.deserializeSimple(xml);
		equal(result.Name, "Test");
	
	});
	test("Deserializing Order, sample 0", function() {
		var xml = "<Order xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>42</Id></Order>";

		var result = netXmlSerializer.deserializeOrder(xml);
		equal(result.Id, 42);
equal(result.Lines, null);
	
	});
	test("Deserializing Order, sample 1", function() {
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
	test("Deserializing SampleIntDate, sample 0", function() {
		var xml = "<SampleIntDate xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>42</Id><Date>2013-03-21T16:28:17.4413801+02:00</Date></SampleIntDate>";

		var result = netXmlSerializer.deserializeSampleIntDate(xml);
		equal(result.Id, 42);
deepEqual(result.Date, new Date(1363876097441));
	
	});
	test("Deserializing ReferenceSubordinate, sample 0", function() {
		var xml = "<ReferenceSubordinate xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>42</Id><Name>Test</Name></ReferenceSubordinate>";

		var result = netXmlSerializer.deserializeReferenceSubordinate(xml);
		equal(result.Id, 42);
equal(result.Name, "Test");
	
	});
	test("Deserializing ReferenceMain, sample 0", function() {
		var xml = "<ReferenceMain xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Reference><Id>42</Id><Name>Test</Name></Reference></ReferenceMain>";

		var result = netXmlSerializer.deserializeReferenceMain(xml);
		equal(result.Reference.Id, 42);
equal(result.Reference.Name, "Test");
	
	});
	test("Deserializing ReferenceMain, sample 1", function() {
		var xml = "<ReferenceMain xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" />";

		var result = netXmlSerializer.deserializeReferenceMain(xml);
		equal(result.Reference, null);
	
	});
	test("Deserializing OrderLine, sample 0", function() {
		var xml = "<OrderLine xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>42</Id><Price>42</Price><Quantity>42</Quantity></OrderLine>";

		var result = netXmlSerializer.deserializeOrderLine(xml);
		equal(result.Id, 42);
equal(result.Price, 42);
equal(result.Quantity, 42);
	
	});

