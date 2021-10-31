import React, { useState } from 'react';
import {FormControl, FormLabel, Input, Select, RadioGroup, HStack, Radio, Button, Form} from "@chakra-ui/react"

const IntakeForm = () => {
    const [formState, setFormState] = useState({ numberOfAnimals: '', speciesName: '', speciesAge: '', bts: '' , acPickup:'', circumstance:'', initObservations:'', finderName:'', finderNumber:'', finderAddress:''});
  
    // update state based on form Input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };

 // submit form
 const handleFormSubmit = async (event) => {
    event.preventDefault();
  };
  
return (
    <main>
        <div>
            <h4> Intake Form </h4>
            <Form> 
              {/* Animal Intake information */}
            <FormControl id="numberOfAnimals" onSubmit={handleFormSubmit}>
              <FormLabel>Number of Animals: </FormLabel>
              <Input type='number' defaultValue="1" id='numberOfAnimals' value={formState.numberOfAnimals} onChange={handleChange} />
            </FormControl>

                <FormLabel>Species Name: </FormLabel>
                <Input type='text' placeholder='Species Name' id='speciesName' value={formState.speciesName} onChange={handleChange} />
                <FormLabel>Approximate Age</FormLabel>
                <Select colorScheme="black" value={formState.speciesAge} onChange={handleChange}>
                  <option color="black" value="newborn">Newborn</option>
                  <option value="hatchling">Hatchling</option>
                  <option value="nestling">Nestling</option>
                  <option value="fledgling">Fledgling</option>
                  <option value="juvenile">Juvenile</option>
                  <option value="newborn">Adult</option>
                </Select>
                <FormLabel> Was the animal brought to shelter or picked up by animal control? </FormLabel>
                <RadioGroup defaultValue="ACPickup">
                  <HStack spacing="24px">
                    <Radio value="BTS">Brought to Shelter</Radio>
                    <Radio value="ACPickup">AC Pickup</Radio>
                  </HStack>
                </RadioGroup>
                <FormLabel for="circumstance">Circumstance of Capture</FormLabel>
                <Input type='text' id='circumstance' value={formState.circumstance} onChange={handleChange}/>
                <FormLabel for="initObservations">Initial Observations</FormLabel>
                <Input type='text' id='initObservations' value={formState.initObservations} onChange={handleChange}/>
                {/* Enter Finders Information */}
                <FormLabel for="finderName">Name</FormLabel>
                <Input type="text" id="finderName" value={formState.finderName} onChange={handleChange}/>
                <FormLabel for="finderNumber">Phone Number</FormLabel>
                <Input type='number' id='finderNumber' value={formState.finderNumber} onChange={handleChange}/>
                <FormLabel for="finderAddress">Address</FormLabel>
                <Input type='text' id='finderAddress' value={formState.finderAddress} onChange={handleChange}/>
              <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
              Submit
            </Button>
            </Form> 
        </div>
    </main>
)
}

export default IntakeForm