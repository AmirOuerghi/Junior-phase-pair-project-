// JobPostings.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import UpdateJobForm from './UpdateJobForm';
import ContactModal from './ContactModal';
import SearchBar from './SearchBar';
import './JobPostings.css';

const JobPostings = ({ onChangeView }) => {
  const [jobPostings, setJobPostings] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/jobpostings')
      .then(response => response.json())
      .then(data => setJobPostings(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleUpdate = (jobTitle) => {
    const jobToUpdate = jobPostings.find(job => job.title === jobTitle);
    setSelectedJob(jobToUpdate);
  };

  const handleDelete = (jobTitle) => {
    try {
      fetch(`http://localhost:5000/jobpostings/${jobTitle}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(() => {
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
    setSelectedJob(null);
  };

  const handleSaveUpdate = async () => {
    try {
      const updatedJob = await fetch(`http://localhost:5000/jobpostings/${selectedJob.title}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedJob),
      }).then(response => response.json());

      setJobPostings(prevJobs =>
        prevJobs.map(job => (job.title === selectedJob.title ? updatedJob : job))
      );

      console.log(`Job with title "${selectedJob.title}" updated successfully`);
      setSelectedJob(null);
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedJob(prevJob => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleContactUs = () => {
    setContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setContactModalOpen(false);
  };

  const handleContactSubmit = (contactInfo) => {
    // Implement logic to send contact information along with the job posting details
    console.log('Contact information submitted:', contactInfo);
    // You can send this information to your server or perform any other desired actions
    // For now, it just logs the data to the console
  };

  // Filter job postings based on the search term
  const filteredJobPostings = jobPostings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="job-postings-container">
      <Navbar onChangeView={onChangeView} />
      <h1 className="job-postings-heading">Job Postings</h1>

      <SearchBar onSearch={term => setSearchTerm(term)} />

      {filteredJobPostings.length === 0 ? (
        <p className="no-postings-message">No job postings available.</p>
      ) : (
        <div>
          {selectedJob ? (
            <UpdateJobForm
              selectedJob={selectedJob}
              onSaveUpdate={handleSaveUpdate}
              onCancelUpdate={handleCancelUpdate}
              onChange={handleChange}
            />
          ) : (
            <ul className="job-list">
              {filteredJobPostings.map(job => (
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
      
      <button className="contact-us-button" onClick={handleContactUs}>
        Contact Us
      </button>

      {isContactModalOpen && (
        <ContactModal onClose={handleCloseContactModal} onSubmit={handleContactSubmit} />
      )}
    </div>
  );
};

export default JobPostings;
