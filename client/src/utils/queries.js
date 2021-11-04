import { gql } from '@apollo/client';

export const QUERY_ANIMALS = gql`
{
    animal {
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
  }
`;