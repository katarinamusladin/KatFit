import React from 'react';
import ExcerciseList from '../ExcerciseList/ExcerciseList';
import './ExcercisesSection.scss';

const ExcercisesSection = ({ exercises, someDayId }) => {
  
  return (
    <div className="exercises-section">
      <ExcerciseList exercises={exercises} dayId={someDayId} />
    </div>
  );
};

export default ExcercisesSection;