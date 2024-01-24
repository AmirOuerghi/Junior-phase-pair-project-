import React, { useState, useEffect } from 'react';

const JobPostings = () => {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    // Fetch job postings when the component mounts
    fetch('http://localhost:5000/jobpostings')
      .then(response => response.json())
      .then(data => setJobPostings(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <h1>Job Postings</h1>
      {jobPostings.length === 0 ? (
        <p>No job postings available.</p>
      ) : (
        <ul>
          {jobPostings.map(job => (
            <li key={job._id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p>Budget: ${job.budget}</p>
              <p>Skills Required: {job.skillsRequired.join(', ')}</p>
              <p>Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
              <p>Posted by: {job.poster.name}</p>
              <img src={job.poster.pic} alt={`Profile of ${job.poster.name}`} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobPostings;
