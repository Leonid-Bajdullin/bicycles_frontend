import React from 'react';
import './App.css';
import NewBikeForm from './components/NewBikeForm';
import BikesList from './components/BikesList';

function App() {
  return (
    <div className="app">
      <h3>Awesome Bike Rental</h3>
      <NewBikeForm />
      <BikesList name="Your rent" path="get_rented_bikes" />
      <BikesList name="Available bicycles" path="get_free_bikes" />
    </div>
  );
}

export default App;
