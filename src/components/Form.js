import React from 'react';
import MyInput from './MyInput';

const Form = () => {
  return (
    <div className="form">
      <div className="input__wrapper">
         <span>day</span>
        <MyInput placeHolder='DD' />
      </div>
      <div className="input__wrapper">
      <span>month</span>
        <MyInput placeHolder='MM' />
      </div>
      <div className="input__wrapper">
      <span>year</span>
        <MyInput placeHolder='YYYY' />
      </div>
    </div>
  );
};

export default Form;
