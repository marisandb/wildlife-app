import { gql } from '@apollo/client';


export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      employee {
        _id
      }
    }
  }
`;

export const ADD_EMPLOYEE = gql`
  mutation addEmployee($username: String!, $email: String!, $password: String!) {
    addEmployee(username: $username, email: $email, password: $password) {
      token
      employee {
        _id
        username
      }
    }
  }
`;

export const ADD_ANIMAL = gql`
  mutation addAnimal {
      _id
      speciesName
      speciesAge
      pickup
      circumstance
      initObservations
      finderName
      finderNumber
      finderAddress
  }
`;

export const REMOVE_ANIMAL = gql`
  mutation removeAnimal {
      _id
      speciesName
      speciesAge
      pickup
      circumstance
      initObservations
      finderName
      finderNumber
      finderAddress
  }
`;