// UpdateJobForm.js
import React from 'react';
import './UpdateJobForm.css';

const UpdateJobForm = ({ selectedJob, onSaveUpdate, onCancelUpdate, onChange }) => {
  return (
    <div className="update-job-form-container">
      <h2 className="update-job-form-heading">Edit Job</h2>
      <label className="update-job-form-label">Title:</label>
      <input type="text" name="title" value={selectedJob.title} onChange={onChange} className="update-job-form-input" />
      <label className="update-job-form-label">Description:</label>
      <textarea
        name="description"
        value={selectedJob.description}
        onChange={onChange}
        className="update-job-form-textarea"
      ></textarea>
      <label className="update-job-form-label">Budget:</label>
      <input type="number" name="budget" value={selectedJob.budget} onChange={onChange} className="update-job-form-input" />
      <label className="update-job-form-label">Skills Required:</label>
      <input
        type="text"
        name="skillsRequired"
        value={selectedJob.skillsRequired}
        onChange={onChange}
        className="update-job-form-input"
      />
      <label className="update-job-form-label">Deadline:</label>
      <input type="date" name="deadline" value={selectedJob.deadline} onChange={onChange} className="update-job-form-input" />
      <button onClick={onSaveUpdate} className="update-job-form-button save-button">
        Save
      </button>
      <button onClick={onCancelUpdate} className="update-job-form-button cancel-button">
        Cancel
      </button>
    </div>
  );
};

export default UpdateJobForm;
