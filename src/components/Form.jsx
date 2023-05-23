import React, { useContext } from 'react';
import MyInput from './MyInput';
import { ContextApp } from '../Reducer';

const Form = () => {
  const { state } = useContext(ContextApp);
  return (
    <div className="form">
      <div className={state.error.day||state.error.month||state.error.years ? 'input__wrapper warning' : 'input__wrapper'}>
        <span>day</span>
        <MyInput value={state.inputValue.day} placeHolder="DD" />
        {state.error.day ? <span className='warning--text'>{state.error.day}</span> : null}
      </div>
      <div className={state.error.day||state.error.month||state.error.years ? 'input__wrapper warning' : 'input__wrapper'}>
        <span>month</span>
        <MyInput value={state.inputValue.month} placeHolder="MM" />
        {state.error.month ? <span className='warning--text'>{state.error.month}</span> : null}
      </div>
      <div className={state.error.day||state.error.month||state.error.years ? 'input__wrapper warning' : 'input__wrapper'}>
        <span>year</span>
        <MyInput value={state.inputValue.years} placeHolder="YYYY" />
        {state.error.years ? <span className='warning--text'>{state.error.years}</span> : null}
      </div>
    </div>
  );
};

export default Form;
