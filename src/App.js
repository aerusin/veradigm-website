import React, { useState } from "react";
import "./App.css";
import doctors from "./doctors";

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleClick = (index) => {
    setSelectedDoctor(doctors[index]);
  };

  return (
    <div className="App">
      <h1>List of Doctors</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialty</th>
            <th>Location</th>
            <th>Review Score</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index} onClick={() => handleClick(index)}>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>{doctor.location}</td>
              <td>{doctor.reviewScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDoctor && (
        <div>
          <h2>Doctor Details</h2>
          <p>{selectedDoctor.details}</p>
          <h2>Similar Doctors:</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Specialty</th>
                <th>Location</th>
                <th>Review Score</th>
              </tr>
            </thead>
            <tbody>
              {doctors
                //filter by same specialty and location
                .filter(
                  (doctor) =>
                    doctor.specialty === selectedDoctor.specialty &&
                    doctor.location === selectedDoctor.location &&
                    doctor.name !== selectedDoctor.name
                )
                // sort with the highest review score at the top
                .sort((a, b) => b.reviewScore - a.reviewScore)
                .map((doctor, index) => (
                  <tr key={index}>
                    <td>{doctor.name}</td>
                    <td>{doctor.specialty}</td>
                    <td>{doctor.location}</td>
                    <td>{doctor.reviewScore}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
