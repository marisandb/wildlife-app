import React, { useState } from "react";

const IntakeForm = () => {
  const [formState, setFormState] = useState({
    numberOfAnimals: "",
    speciesName: "",
    speciesAge: "",
    bts: "",
    acPickup: "",
    circumstance: "",
    initObservations: "",
    finderName: "",
    finderNumber: "",
    finderAddress: "",
  });

  // update state based on form input changes
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
        <form onSubmit={handleFormSubmit}>
          {/* Animal Intake information */}
          <label>Number of Animals: </label>
          <input
            type="number"
            defaultValue="1"
            id="numberOfAnimals"
            value={formState.numberOfAnimals}
            onChange={handleChange}
          />
          <label>Species Name: </label>
          <input
            type="text"
            placeholder="Species Name"
            id="speciesName"
            value={formState.speciesName}
            onChange={handleChange}
          />
          <label>Approximate Age</label>
          <seclect value={formState.speciesAge} onChange={handleChange}>
            <option value="newborn">Newborn</option>
            <option value="hatchling">Hatchling</option>
            <option value="nestling">Nestling</option>
            <option value="fledgling">Fledgling</option>
            <option value="juvenile">Juvenile</option>
            <option value="newborn">Adult</option>
          </seclect>
          <input
            type="checkbox"
            id="BTS"
            value={formState.bts}
            onChange={handleChange}
          />
          <label for="BTS">BTS</label>
          <input
            type="checkbox"
            id="ACPickup"
            value={formState.acPickup}
            onChange={handleChange}
          />
          <label for="ACPickup">AC Pickup</label>
          <label for="circumstance">Circumstance of Capture</label>
          <input
            type="text"
            id="circumstance"
            value={formState.circumstance}
            onChange={handleChange}
          />
          <label for="initObservations">Initial Observations</label>
          <input
            type="text"
            id="initObservations"
            value={formState.initObservations}
            onChange={handleChange}
          />
          {/* Enter Finders Information */}
          <label for="finderName">Name</label>
          <input
            type="text"
            id="finderName"
            value={formState.finderName}
            onChange={handleChange}
          />
          <label for="finderNumber">Phone Number</label>
          <input
            type="number"
            id="finderNumber"
            value={formState.finderNumber}
            onChange={handleChange}
          />
          <label for="finderAddress">Address</label>
          <input
            type="text"
            id="finderAddress"
            value={formState.finderAddress}
            onChange={handleChange}
          />
        </form>
      </div>
    </main>
  );
};

export default IntakeForm;
