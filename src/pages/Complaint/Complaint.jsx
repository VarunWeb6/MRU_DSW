import React from 'react';
import './Complaint.css';

const Complaint = () => {
  return (
    <div className="complaint-container">
      <h1>College Complaint Box</h1>
      <p>
        If you have any complaints or issues, please use the link below to submit your complaint. Your feedback is important to us!
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfD5fxgZLq4GvnZOzkIyksJHJeFJpRm4IEBCnCeWx7/viewform" 
        target="_blank"
        rel="noopener noreferrer"
        className="form-link"
      >
        Submit Your Complaint
      </a>
    </div>
  );
};

export default Complaint;
