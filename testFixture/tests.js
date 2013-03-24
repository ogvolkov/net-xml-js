
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
		var xml = "<Order xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>43</Id><Lines><OrderLine><Id>44</Id><Price>45</Price><Quantity>46</Quantity></OrderLine><OrderLine><Id>47</Id><Price>48</Price><Quantity>49</Quantity></OrderLine></Lines></Order>";

		var result = netXmlSerializer.deserializeOrder(xml);
		equal(result.Id, 43);

equal(result.Lines[0].Id, 44);

equal(result.Lines[0].Price, 45);

equal(result.Lines[0].Quantity, 46);

equal(result.Lines[1].Id, 47);

equal(result.Lines[1].Price, 48);

equal(result.Lines[1].Quantity, 49);

		
	});
	test("Deserializing SampleIntDate, sample 0", function() {
		var xml = "<SampleIntDate xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>50</Id><Date>2013-03-25T00:30:20.2745285+02:00</Date></SampleIntDate>";

		var result = netXmlSerializer.deserializeSampleIntDate(xml);
		equal(result.Id, 50);

deepEqual(result.Date, new Date(1364164220274));
		
	});
	test("Deserializing ReferenceSubordinate, sample 0", function() {
		var xml = "<ReferenceSubordinate xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>51</Id><Name>Test</Name></ReferenceSubordinate>";

		var result = netXmlSerializer.deserializeReferenceSubordinate(xml);
		equal(result.Id, 51);

equal(result.Name, "Test");
		
	});
	test("Deserializing ReferenceMain, sample 0", function() {
		var xml = "<ReferenceMain xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Reference><Id>52</Id><Name>Test</Name></Reference></ReferenceMain>";

		var result = netXmlSerializer.deserializeReferenceMain(xml);
		equal(result.Reference.Id, 52);

equal(result.Reference.Name, "Test");
		
	});
	test("Deserializing ReferenceMain, sample 1", function() {
		var xml = "<ReferenceMain xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" />";

		var result = netXmlSerializer.deserializeReferenceMain(xml);
		equal(result.Reference, null);
		
	});
	test("Deserializing OrderLine, sample 0", function() {
		var xml = "<OrderLine xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Id>53</Id><Price>54</Price><Quantity>55</Quantity></OrderLine>";

		var result = netXmlSerializer.deserializeOrderLine(xml);
		equal(result.Id, 53);

equal(result.Price, 54);

equal(result.Quantity, 55);

		
	});
