// JobPostings.js
import React, { useState, useEffect } from 'react';
import './JobPostings.css';

const JobPostings = () => {
  const [jobPostings, setJobPostings] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    // Fetch job postings when the component mounts
    fetch('http://localhost:5000/jobpostings')
      .then(response => response.json())
      .then(data => setJobPostings(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleUpdate = (jobTitle) => {
    // Find the selected job based on the titlej
    const jobToUpdate = jobPostings.find(job => job.title === jobTitle);
    // Set the selected job in the state
    setSelectedJob(jobToUpdate);
  };

  const handleDelete = (jobTitle) => {
    try {
      // Implement your delete logic here
      // For example, make a DELETE request to delete the job
      fetch(`http://localhost:5000/jobpostings/${jobTitle}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(() => {
          // Remove the job from the state
          setJobPostings(prevJobs =>
            prevJobs.filter(job => job.title !== jobTitle)
          );

          console.log(`Job with title "${jobTitle}" deleted successfully`);
        })
        .catch(error => console.error('Error deleting job:', error));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const handleCancelUpdate = () => {
    // Clear the selected job when canceling the update
    setSelectedJob(null);
  };

  const handleSaveUpdate = async () => {
    try {
      // Make a PUT request to update the job
      const updatedJob = await fetch(`http://localhost:5000/jobpostings/${selectedJob.title}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedJob),
      }).then(response => response.json());

      // Update the job in the state
      setJobPostings(prevJobs =>
        prevJobs.map(job => (job.title === selectedJob.title ? updatedJob : job))
      );

      console.log(`Job with title "${selectedJob.title}" updated successfully`);
      // Clear the selected job after updating
      setSelectedJob(null);
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  const handleChange = (e) => {
    // Update the selected job state when input fields are changed
    const { name, value } = e.target;
    setSelectedJob(prevJob => ({
      ...prevJob,
      [name]: value,
    }));
  };

  return (
    <div className="job-postings-container">
      <h1 className="job-postings-heading">Job Postings</h1>
      {jobPostings.length === 0 ? (
        <p className="no-postings-message">No job postings available.</p>
      ) : (
        <div>
          {selectedJob ? (
            <div>
              <h2>Edit Job</h2>
              <label>Title:</label>
              <input type="text" name="title" value={selectedJob.title} onChange={handleChange} />
              <label>Description:</label>
              <textarea name="description" value={selectedJob.description} onChange={handleChange}></textarea>
              <label>Budget:</label>
              <input type="number" name="budget" value={selectedJob.budget} onChange={handleChange} />
              <label>Skills Required:</label>
              <input type="text" name="skillsRequired" value={selectedJob.skillsRequired} onChange={handleChange} />
              <label>Deadline:</label>
              <input type="date" name="deadline" value={selectedJob.deadline} onChange={handleChange} />
              <button onClick={handleSaveUpdate}>Save</button>
              <button onClick={handleCancelUpdate}>Cancel</button>
            </div>
          ) : (
            <ul className="job-list">
              {jobPostings.map(job => (
                <li key={job._id} className="job-item">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-description">{job.description}</p>
                  <p className="job-budget">Budget: ${Number(job.budget)}</p>
                  <p className="job-skills">Skills Required: {job.skillsRequired.join(', ')}</p>
                  <p className="job-deadline">Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
                  <p className="job-poster">Posted by: {job.poster.name}</p>
                  <div className="job-buttons">
                  <button className="update-button" onClick={() => handleUpdate(job.title)}>Update</button>
                  <button className="delete-button" onClick={() => handleDelete(job.title)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default JobPostings;
