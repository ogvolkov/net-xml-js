test("Deserializing Simple", function() {
    var xml = "<Simple xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Name>Test</Name></Simple>"
    var result = netXmlSerializer.deserializeSimple(xml)
    deepEqual(result.Name, "Test");
});
test("Deserializing SampleIntDate", function() {
    var xml = "<SampleIntDate xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>42</Id><Date>2013-03-02T19:42:48.2261738+02:00</Date></SampleIntDate>"
    var result = netXmlSerializer.deserializeSampleIntDate(xml)
    deepEqual(result.Id, 42);
    deepEqual(result.Date, new Date(1362246168226));
});
