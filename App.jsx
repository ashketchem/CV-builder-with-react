import React, { useState } from 'react';
import './App.css';
import GeneralInfo from './../GeneralInfo/generalData.jsx';

export default function App() {
  const [generalData, setGeneralData] = useState({});

  return (
    <main>

      <div className="nav">
        <nav className="Nav">CV Builder</nav><div className="sec"><p>Home</p> <p>Login</p> <p>Sign-in</p> </div>
        </div>
      
      <div className="App">     
        
        <h1 className="Heading"> Welcome to the CV Builder</h1>
       
        <GeneralInfo onSubmit={setGeneralData} />

        {Object.keys(generalData).length > 0 && (
          <div className="preview">
            <h2 className="Heading">CV Preview</h2>
            {generalData.image && (
              <img src={generalData.image} alt="Profile" width="100" />
            )}


            <div className="gen-pre">
              <div className="general-info">
            <h2>General Info</h2>
              <p><strong>Name : </strong> {generalData.userName}</p>
            <p><strong>Email : </strong> {generalData.email}</p>
            <p><strong>Phone : </strong> {generalData.phoneNumber}</p>
            <p><strong>GitHub : </strong> {generalData.github}</p>
            <p><strong>LinkedIn : </strong> {generalData.linkedin}</p>
            <p><strong>School :</strong> {generalData.schoolName}</p>
            </div>
            
            <div className="education">
              <h2>Education and other details</h2>
            <p><strong>University : </strong> {generalData.universityName}</p>
            <p><strong>Degree : </strong> {generalData.degree}</p>
            <p><strong>Company : </strong> {generalData.companyName}</p>
            <p><strong>Experience : </strong> {generalData.WorkExperience}</p>
            <p><strong>Skills : </strong> {generalData.skills}</p>
            </div>
            
          </div>
        
          </div>
      )}
      </div>
    </main>
  );
}