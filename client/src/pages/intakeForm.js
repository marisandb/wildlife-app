import React, { useState } from 'react';
import {FormLabel, Input, Select, Button, Heading, Box, Spacer, Grid, Center} from "@chakra-ui/react"
import { useMutation } from '@apollo/client';
import { ADD_ANIMAL } from '../utils/mutations';
import { QUERY_ANIMALS } from '../utils/queries';

const IntakeForm = () => {
  const [addAnimal, { error }] = useMutation(ADD_ANIMAL, {
    update(cache, { data: { addAnimal } }) {
      // read what's currently in the cache
      const { animals } = cache.readQuery({ query: QUERY_ANIMALS });
  
      // prepend the newest thought to the front of the array
      cache.writeQuery({
        query: QUERY_ANIMALS,
        data: { animals: [addAnimal, ...animals] }
      });
    }
  });  const [formState, setFormState] = useState({ numberOfAnimals: '', speciesName: '', speciesAge: '', pickup: '', circumstance:'', initObservations:'', finderName:'', finderNumber:'', finderAddress:''});
  
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
    try {
      // add thought to database
      await addAnimal({
        
      });
    } catch (e) {
      console.error(e);
    }
  };
  
return (
  <div>
    <Center>
      <Grid m="10" width="500px">  
      <form onSubmit={handleFormSubmit}>
        <Box>

    <Heading> Intake Form </Heading>
        <div>
          <FormLabel htmlFor="NumberofAnimals">Number of Animals:</FormLabel>
          <Input
            placeholder="#"
            name="numberOfAnimals"
            type="numberOfAnimals"
            id="numberOfAnimals"
            onChange={handleChange}
          />
        </div>
        <div>
          <FormLabel htmlFor="speciesName">Species Name:</FormLabel>
          <Input
            placeholder="Ex: Cottontail"
            name="speciesName"
            type="speciesName"
            id="speciesName"
            onChange={handleChange}
          />
        </div>
        <div>
          <FormLabel htmlFor="speciesAge">Species Age:</FormLabel>
          <Select name="speciesAge" type="speciesAge" id="speciesAge" onChange={handleChange}>
              <option value="newborn">Newborn</option>
              <option value="hatchling">Hatchling</option>
              <option value="nestling">Nestling</option>
              <option value="fledgling">Fledgling</option>
              <option value="juvenile">Juvenile</option>
              <option value="newborn">Adult</option>
          </Select>
        </div>
        <div>
          <FormLabel htmlFor="pickup">Was the animal brought to the shelter or picked up by animal control?</FormLabel>
          <Select name="pickup" type="pickup" id="pickup" onChange={handleChange}>
              <option value="ACPickup">AC Pickup</option>
              <option value="BTS">Brought to Shelter</option>
          </Select>
        </div>
        <div>
          <FormLabel htmlFor="circumstance">Circumstance of Capture:</FormLabel>
          <Input
            placeholder="Ex: Found in yard"
            name="circumstance"
            type="circumstance"
            id="circumstance"
            onChange={handleChange}
          />
        </div>
        <div>
          <FormLabel htmlFor="initObservations">Initial Observations:</FormLabel>
          <Input
            placeholder="Ex: Appears Healthy"
            name="initObservations"
            type="initObservations"
            id="initObservations"
            onChange={handleChange}
          />
        </div>
        </Box>

        <Spacer />

        {/* Start of finders information */}
        <Box>
        <Heading> Finders Information </Heading>
        <div>
          <FormLabel htmlFor="finderName">Name:</FormLabel>
          <Input
            placeholder="Jane Doe"
            name="finderName"
            type="finderName"
            id="finderName"
            onChange={handleChange}
          />
        </div>
        <div>
          <FormLabel htmlFor="finderNumber">Phone Number:</FormLabel>
          <Input
            placeholder="(xxx)-xxx-xxxx"
            name="finderNumber"
            type="finderNumber"
            id="finderNumber"
            onChange={handleChange}
          />
        </div>
        <div>
          <FormLabel htmlFor="finderAddress">Address:</FormLabel>
          <Input
            placeholder="123 main st"
            name="finderAddress"
            type="finderAddress"
            id="finderAddress"
            onChange={handleChange}
          />
        </div>
        </Box>

        
        <div>
          <Button mt="5" colorScheme="green" type="submit">Submit</Button>
          {error && <span className="ml-2">   Oops Something went wrong...</span>}

        </div>
      </form>
      </Grid>
      </Center>
      </div>
)
}

export default IntakeForm