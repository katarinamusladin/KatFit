import React from 'react';
import ExcerciseList from '../ExcerciseList/ExcerciseList';
import './ExcercisesSection.scss';

const ExcercisesSection = ({ exercises }) => {
  return (
    <div className="exercises-section">
      <ExcerciseList exercises={exercises} />
    </div>
  );
};

export default ExcercisesSection;