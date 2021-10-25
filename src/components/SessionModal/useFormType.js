import React from 'react';
import NewForm from './NewForm';
import BillableForm from './BillableForm';
import PersonalForm from './PersonalForm';

const useFormType = ({ currentActivity, handleChange }) => {
  if (currentActivity.activityType === 'BILLABLE') {
    return <BillableForm activity={currentActivity} handleChange={handleChange} />;
  }
  if (currentActivity.activityType === 'PERSONAL') {
    return <PersonalForm activity={currentActivity} handleChange={handleChange} />;
  }
  return <NewForm handleChange={handleChange} />;
};
export default useFormType;
