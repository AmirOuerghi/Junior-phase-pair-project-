import React, { useState } from 'react';
import './ContactModal.css'; // Create a CSS file for styling

const ContactModal = ({ onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [Title, setTitle] = useState('');

  const handleSubmit = () => {
    // Validate and submit the contact information
    if (name && email && phone && Title) {
      onSubmit({ name, email, phone, Title });
      onClose();
      window.prompt('Thank you! We will contact you soon.'); // Display a prompt
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="contact-modal-overlay">
      <div className="contact-modal">
        <h2>Contact Us</h2>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="phone">Your Phone Number:</label>
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label htmlFor="Title">Title of the job:</label>
        <input type="text" id="Title" value={Title} onChange={(e) => setTitle(e.target.value)} />

        <div className="contact-modal-buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
 