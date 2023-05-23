

export const isError = (inputValue) => {
  let err = { day: null, month: null, years: null };
  for (let key in inputValue) {
    if (inputValue[key] === '') err = { ...err, [key]: 'This field if required' };
  }
  if (new Date()<new Date(inputValue.years, inputValue.month-1, inputValue.day))
    err = { ...err, years: 'Must be in the past' };
  if (inputValue.month > 12) err = { ...err, month: 'Must be a valid month' };
  if (inputValue.day > new Date(inputValue.years, inputValue.month, 0).getDate())
    err = { ...err, day: 'Must be a valid day' };
  return err;
};
