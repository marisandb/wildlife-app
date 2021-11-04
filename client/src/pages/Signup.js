import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EMPLOYEE } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import {FormLabel, Input, Box, Button, Heading} from "@chakra-ui/react"


const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addEmployee, { error }] = useMutation(ADD_EMPLOYEE);
  
    // update state based on form input changes
    const handleChange = event => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value
      });
    };
  
    // submit form
    const handleFormSubmit = async event => {
      event.preventDefault();
  
      try {
        const { data } = await addEmployee({
          variables: { ...formState }
        });
  
        Auth.login(data.addEmployee.token);
      } catch (e) {
        console.error(e);
      }
    };
  

  return (
    <div className="container my-1">
      <Link to="/login">← Already have an account? Click here to login</Link>
    <Box m="5">
      <Heading>Signup</Heading>
      <Heading as="h2" size="sm"> This page is for employees only </Heading>
    </Box>

    <Box m="5" width="250px">
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <FormLabel htmlFor="username">Username:</FormLabel>
          <Input
            placeholder="username"
            name="username"
            type="username"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <FormLabel htmlFor="eamil">Email:</FormLabel>
          <Input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
        </div>
        <div className="flex-row space-between my-2">
          <FormLabel htmlFor="pwd">Password:</FormLabel>
          <Input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
        </div>
        
        <div className="flex-row flex-end">
          <Button mt="5" colorScheme="green" type="submit">Submit</Button>
          {error && <div>Sign up failed</div>}

        </div>
      </form>
        </Box>
    </div>
  );
}

export default Signup;
