
	test("Deserializing Order, sample 0", function() {
		var xml = "<Order xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>42</Id></Order>";

		var result = netXmlSerializer.deserializeOrder(xml);
		equal(result.Id, 42);

equal(result.Lines, null);
		
	});
	test("Deserializing Order, sample 1", function() {
		var xml = "<Order xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>43</Id><Lines><OrderLine><Id>44</Id><Price>45</Price><Quantity>46</Quantity></OrderLine><OrderLine><Id>47</Id><Price>48</Price><Quantity>49</Quantity></OrderLine></Lines></Order>";

		var result = netXmlSerializer.deserializeOrder(xml);
		equal(result.Id, 43);

equal(result.Lines.length, 2)
equal(result.Lines[0].Id, 44);

equal(result.Lines[0].Price, 45);

equal(result.Lines[0].Quantity, 46);

equal(result.Lines[1].Id, 47);

equal(result.Lines[1].Price, 48);

equal(result.Lines[1].Quantity, 49);

		
	});
	test("Deserializing Simple, sample 0", function() {
		var xml = "<Simple xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Name>Test</Name></Simple>";

		var result = netXmlSerializer.deserializeSimple(xml);
		equal(result.Name, "Test");
		
	});
	test("Deserializing SelfRef, sample 0", function() {
		var xml = "<SelfRef xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>50</Id><Reference><Id>51</Id></Reference></SelfRef>";

		var result = netXmlSerializer.deserializeSelfRef(xml);
		equal(result.Id, 50);

equal(result.Reference.Id, 51);

equal(result.Reference.Reference, null);
		
	});
	test("Deserializing SelfRef, sample 1", function() {
		var xml = "<SelfRef xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>52</Id></SelfRef>";

		var result = netXmlSerializer.deserializeSelfRef(xml);
		equal(result.Id, 52);

equal(result.Reference, null);
		
	});
	test("Deserializing ReferenceSubordinate, sample 0", function() {
		var xml = "<ReferenceSubordinate xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>53</Id><Name>Test</Name></ReferenceSubordinate>";

		var result = netXmlSerializer.deserializeReferenceSubordinate(xml);
		equal(result.Id, 53);

equal(result.Name, "Test");
		
	});
	test("Deserializing SampleIntDate, sample 0", function() {
		var xml = "<SampleIntDate xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>54</Id><Date>2013-04-09T16:22:02.9032568+03:00</Date></SampleIntDate>";

		var result = netXmlSerializer.deserializeSampleIntDate(xml);
		equal(result.Id, 54);

deepEqual(result.Date, new Date(1365513722903));
		
	});
	test("Deserializing ReferenceMain, sample 0", function() {
		var xml = "<ReferenceMain xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Reference><Id>55</Id><Name>Test</Name></Reference></ReferenceMain>";

		var result = netXmlSerializer.deserializeReferenceMain(xml);
		equal(result.Reference.Id, 55);

equal(result.Reference.Name, "Test");
		
	});
	test("Deserializing ReferenceMain, sample 1", function() {
		var xml = "<ReferenceMain xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" />";

		var result = netXmlSerializer.deserializeReferenceMain(xml);
		equal(result.Reference, null);
		
	});
	test("Deserializing WithObjectProperty, sample 0", function() {
		var xml = "<WithObjectProperty xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Name>Test</Name><Value xsi:type=\"xsd:string\">aaa</Value></WithObjectProperty>";

		var result = netXmlSerializer.deserializeWithObjectProperty(xml);
		equal(result.Name, "Test");
equal(result.Value, "aaa");
		
	});
	test("Deserializing WithObjectProperty, sample 1", function() {
		var xml = "<WithObjectProperty xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Name>Test</Name><Value xsi:type=\"xsd:int\">10</Value></WithObjectProperty>";

		var result = netXmlSerializer.deserializeWithObjectProperty(xml);
		equal(result.Name, "Test");
equal(result.Value, 10);

		
	});
	test("Deserializing OrderLine, sample 0", function() {
		var xml = "<OrderLine xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>56</Id><Price>57</Price><Quantity>58</Quantity></OrderLine>";

		var result = netXmlSerializer.deserializeOrderLine(xml);
		equal(result.Id, 56);

equal(result.Price, 57);

equal(result.Quantity, 58);

		
	});
	test("Deserializing TestEnum, sample 0", function() {
		var xml = "<TestEnum>Right</TestEnum>";

		var result = netXmlSerializer.deserializeTestEnum(xml);
				
	});
	test("Deserializing WithEnumProperty, sample 0", function() {
		var xml = "<WithEnumProperty xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Selector>Right</Selector></WithEnumProperty>";

		var result = netXmlSerializer.deserializeWithEnumProperty(xml);
		equal(result.Selector, "Right");
		
	});
