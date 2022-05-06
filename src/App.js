import './App.css';
import React from 'react';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard 
      firstName = {"Jazlynn"}
      lastName = {"Cortez"}
      age = {6}
      hairColor = {"Black"}
      />
      <PersonCard 
      firstName = {"Poppy"}
      lastName = {"Longoria"}
      age = {8}
      hairColor = {"Brown with Grey Highlights"}
      />
      <PersonCard 
      firstName = {"Marcelo"}
      lastName = {"Cortez"}
      age = {7}
      hairColor = {"Black"}
      />
      <PersonCard 
      firstName = {"Leighton"}
      lastName = {"Longoria"}
      age = {2}
      hairColor = {"Light-Brown"}
      />
    </div>
    
  );

}

export default App;

