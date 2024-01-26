import React from 'react';
import interviewTipsData from '../interviewTipsData.json';
import './Help.css'

const InterviewTips = () => {
  return (
    <div className="interview-tips-container">
      <h2 className="interview-tips-heading">Interview Tips</h2>
      <ul className="interview-tips-list">
        {interviewTipsData.map(tip => (
          <li key={tip.id} className="interview-tip-item">
            <h3 className="tip-title">{tip.title}</h3>
            <p className="tip-description">{tip.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterviewTips;