import React from 'react';
import MyInput from './MyInput';

const Form = () => {
  return (
    <div className="form">
      <div className="input__wrapper">
         <span>day</span>
        <MyInput />
      </div>
      <div className="input__wrapper">
      <span>month</span>
        <MyInput />
      </div>
      <div className="input__wrapper">
      <span>year</span>
        <MyInput />
      </div>
    </div>
  );
};

export default Form;
