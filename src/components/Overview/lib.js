export const DEFAULT_ACTIVITY = {
  id: '',
  activityType: '',
  engName: '',
  chargeCode: '',
  clientName: '',
  clientNumber: '',
  comment: '',
};

export const activityUpdateData = (data) => {
  return Object.keys(DEFAULT_ACTIVITY).reduce((acc, curr) => {
    return { ...acc, [curr]: data[curr] || null };
  }, {});
};
