import React from 'react';
import './Suggestions.css';


const Suggestions = () => {
  return (
    <div className="suggestion-container">
      <h1>College Suggestion Box</h1>
      <p>
        We value your feedback and suggestions. Please use the link below to share your ideas for improving the college.
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeFpMbgp4MODCItnin3kwjs20xPtuoDfYAOsIwgdUWospL_Kw/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
        className="form-link"
      >
        Click here to submit your suggestion
      </a>
    </div>
  );
};

export default Suggestions  ;
