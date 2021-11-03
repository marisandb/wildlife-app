import React, { useState } from 'react';
import {FormControl, FormLabel, Input, Select, RadioGroup, HStack, Radio, Button} from "@chakra-ui/react"

const IntakeForm = () => {
    const [formState, setFormState] = useState({ numberOfAnimals: '', speciesName: '', speciesAge: '', pickup: '', circumstance:'', initObservations:'', finderName:'', finderNumber:'', finderAddress:''});
  
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
        <div>
            <h4> Intake Form </h4>
            <form onSubmit={handleFormSubmit}>  
              {/* Animal Intake information */}
            <FormControl id="numberOfAnimals">
              <FormLabel>Number of Animals: </FormLabel>
              <Input type='number' id='numberOfAnimals' value={formState.numberOfAnimals} onChange={handleChange} />
            </FormControl>
            <FormControl id="speciesName">
                <FormLabel>Species Name: </FormLabel>
                <Input type='text' placeholder='Species Name' id='speciesName' value={formState.speciesName} onChange={handleChange} />
            </FormControl>
            <FormControl id="speciesAge">
                <FormLabel>Approximate Age</FormLabel>
                <Select placeholder="Select Age" value={formState.speciesAge} onChange={handleChange}>
                  <option value="newborn">Newborn</option>
                  <option value="hatchling">Hatchling</option>
                  <option value="nestling">Nestling</option>
                  <option value="fledgling">Fledgling</option>
                  <option value="juvenile">Juvenile</option>
                  <option value="newborn">Adult</option>
                </Select>
            </FormControl>
            <FormControl id="pickup">
                <FormLabel> Was the animal brought to shelter or picked up by animal control? </FormLabel>
                <RadioGroup defaultValue="ACPickup">
                  <HStack spacing="24px">
                    <Radio value="BTS">Brought to Shelter</Radio>
                    <Radio value="ACPickup">AC Pickup</Radio>
                  </HStack>
                </RadioGroup>
            </FormControl>
            <FormControl id="circumstance">
                <FormLabel for="circumstance">Circumstance of Capture</FormLabel>
                <Input type='text' id='circumstance' value={formState.circumstance} onChange={handleChange}/>
            </FormControl>
            <FormControl id="initObservations">
                <FormLabel for="initObservations">Initial Observations</FormLabel>
                <Input type='text' id='initObservations' value={formState.initObservations} onChange={handleChange}/>
            </FormControl>
            <h2> Finders Information </h2>
            <FormControl id="finderName">
                <FormLabel for="finderName">Name</FormLabel>
                <Input type="text" id="finderName" value={formState.finderName} onChange={handleChange}/>
            </FormControl>
            <FormControl id="finderNumber">
                <FormLabel for="finderNumber">Phone Number</FormLabel>
                <Input type='number' id='finderNumber' value={formState.finderNumber} onChange={handleChange}/>
            </FormControl>
            <FormControl id="finderAddress">
                <FormLabel for="finderAddress">Address</FormLabel>
                <Input type='text' id='finderAddress' value={formState.finderAddress} onChange={handleChange}/>
            </FormControl>
              <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
              Submit
            </Button>
            </form> 
        </div>
)
}

export default IntakeForm