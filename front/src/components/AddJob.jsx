import React, { useState } from 'react';
import './NewJobForm.css'; // Create a CSS file for styling and import it here

const AddJob = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [skillsRequired, setSkillsRequired] = useState('');
  const [deadline, setDeadline] = useState('');
  const [posterName, setPosterName] = useState('');
  const [posterPic, setPosterPic] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can add form validation here before making the API call

    const response = await fetch('http://localhost:5000/jobpostings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        budget,
        skillsRequired: skillsRequired.split(','), // Convert comma-separated string to an array
        deadline,
        posterName,
        posterPic,
      }),
    });

    if (response.ok) {
      console.log('Job posting created successfully');
      // You may want to redirect the user or perform other actions upon successful submission
    } else {
      console.error('Failed to create job posting');
      // Handle errors or display a message to the user
    }
  };

  return (
    <div className="new-job-form-container">
      <h1>Create a New Job Posting</h1>
      <form className="job-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label htmlFor="budget">Budget:</label>
        <input type="number" id="budget" value={budget} onChange={(e) => setBudget(e.target.value)} required />

        <label htmlFor="skillsRequired">Skills Required (comma-separated):</label>
        <input type="text" id="skillsRequired" value={skillsRequired} onChange={(e) => setSkillsRequired(e.target.value)} required />

        <label htmlFor="deadline">Deadline:</label>
        <input type="date" id="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />

        <label htmlFor="posterName">Poster Name:</label>
        <input type="text" id="posterName" value={posterName} onChange={(e) => setPosterName(e.target.value)} required />

        <label htmlFor="posterPic">Poster Picture URL:</label>
        <input type="text" id="posterPic" value={posterPic} onChange={(e) => setPosterPic(e.target.value)} required />

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default AddJob;