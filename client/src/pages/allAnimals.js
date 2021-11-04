import React from 'react';
import AnimalList from '../components/animalList';
// import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ANIMALS } from '../utils/queries';

const AllAnimals = () => {
    // const loggedIn = Auth.loggedIn();
     // use useQuery hook to make query request
  const { data } = useQuery(QUERY_ANIMALS);
  const animals = data?.animals || [];
  console.log(animals)

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <AnimalList animals={animals} />
      </div>
    </main>
  );
};

export default AllAnimals;
