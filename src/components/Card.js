import React from 'react';
import '../index.css'; 

const SurveyCard = ({ title, imageUrl, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="survey-card"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div>{title}</div>
    </div>
  );
};

export default SurveyCard;
