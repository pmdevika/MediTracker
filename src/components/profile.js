import React, { useState } from 'react';
import '../styles/card.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sugar, setSugar] = useState('');
  const [bp, setBP] = useState('');
  const [chola, setChola] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [medicines, setMedicines] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSugarChange = (event) => {
    setSugar(event.target.value);
  };

  const handleBPChange = (event) => {
    setBP(event.target.value);
  };

  const handleCholaChange = (event) => {
    setChola(event.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (event) => {
    event.preventDefault();
    setIsEditing(false);
    console.log('Saved Name:', name);
    console.log('Saved Age:', age);
    console.log('Saved Sugar Level:', sugar);
    console.log('Saved Blood Pressure:', bp);
    console.log('Saved Cholesterol:', chola);
  };

  const handleAddMedicine = () => {
    const medicineName = prompt('Enter the name of the medicine:');
    const medicineTimings = prompt('Enter the timings for the medicine:');
    if (medicineName && medicineTimings) {
      const newMedicine = { name: medicineName, timings: medicineTimings };
      setMedicines((prevMedicines) => [...prevMedicines, newMedicine]);
    }
  };

  return (
    <div id='profile'>
      <h1>Profile Details</h1>

      <div className='card-container'>
        <div className='card'>
          <h2>Health Condition</h2>
          {isEditing ? (
            <form onSubmit={handleSave}>
              <label>
                Name:
                <input
                  type='text'
                  className='input'
                  value={name}
                  onChange={handleNameChange}
                />
              </label>
              <br />
              <label>
                Age:
                <input
                  type='text'
                  className='input'
                  value={age}
                  onChange={handleAgeChange}
                />
              </label>
              <br />
              <label>
                Sugar Level:
                <input
                  type='text'
                  className='input'
                  value={sugar}
                  onChange={handleSugarChange}
                />
              </label>
              <br />
              <label>
                Blood Pressure:
                <input
                  type='text'
                  className='input'
                  value={bp}
                  onChange={handleBPChange}
                />
              </label>
              <br />
              <label>
                Cholesterol:
                <input
                  type='text'
                  className='input'
                  value={chola}
                  onChange={handleCholaChange}
                />
              </label>
              <br />
              <button type='submit'>Save</button>
            </form>
          ) : (
            <div>
              <p>Name: {name}</p>
              <p>Age: {age}</p>
              <p>Sugar Level: {sugar}</p>
              <p>Blood Pressure: {bp}</p>
              <p>Cholesterol: {chola}</p>
              <button onClick={handleEdit}>Edit</button>
            </div>
          )}
        </div>
        <div className='card'>
          <h2>Medicine Details</h2>
          <div>
            {medicines.map((medicine, index) => (
              <div key={index}>
                <p>Name: {medicine.name}</p>
                <p>Timings: {medicine.timings}</p>
                {medicine.timings.split(',').length === 3 && (
                  <button>...</button>
                )}
              </div>
            ))}
            {!isEditing && (
              <button onClick={handleAddMedicine}>Add Medicine</button>
            )}
          </div>
        </div>
        <div className='card'>
          <h2>Consultant Details</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
