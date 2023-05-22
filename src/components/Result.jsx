import React, { useContext } from 'react';
import { ContextApp } from '../Reducer';

const Result = () => {
  const {state} = useContext(ContextApp)
  return (
    <div className='result'>
      <p>
        <span>{state.result.years===null?'--':state.result.years}</span> years
      </p>
      <p>
        <span>{state.result.month===null?'--':state.result.month}</span> month
      </p>
      <p>
        <span>{state.result.day===null?'--':state.result.day}</span> days
      </p>
    </div>
  );
};

export default Result;
