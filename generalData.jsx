import React, { useState } from "react";
import "../src/App.css";

export default function GeneralInfo({ onSubmit }) {
  const [info, setInfo] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    github: "",
    linkedin: "",
    image: null,
    schoolName: "",
    address: "",
    universityName: "",
    degree: "",
    WorkExperience: "",
    companyName: "",
    proficiency: "",
    projects: "",
    skills: "",
    hobbies: "",
    languages: "",
    certifications: "",
    references: "",
    achievements: "",
  });

  // Just one form, no edit/preview toggle here
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(info); // Pass data up to App.jsx
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setInfo((prev) => ({ ...prev, image: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (

  
    <form onSubmit={handleSubmit} className="general-info">
      {Object.entries(info).map(([key, value]) => {
        if (key === "image") {
          return (
            <div key={key}>
              <label>{key}:</label>
              <input
                type="file"
                accept="image/*"
                name={key}
                onChange={handleImageChange}
              />
            </div>
          );
        }

        const inputType =
          key === "email"
            ? "email"
            : key === "phoneNumber"
            ? "tel"
            : key === "github" || key === "linkedin"
            ? "url"
            : "text";

        return (
          <div key={key}>
            <label>{key}:</label>
            <input
              type={inputType}
              name={key}
              value={value}
              onChange={handleChange}
              placeholder={key}
              required={key !== "image"} // optional image
              inputMode={
                key === "phoneNumber"
                  ? "numeric"
                  : key === "email"
                  ? "email"
                  : undefined
              }
            />
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
    
  );
  }
