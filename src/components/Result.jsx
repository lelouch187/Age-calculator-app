import React, { useContext } from 'react';
import { ContextApp } from '../Reducer';
import AnimatedNumber from "animated-number-react";

const Result = () => {
  const {state} = useContext(ContextApp)
  const formatValue = value => `${Number(value).toFixed(0)}`;
  return (
    <div className='result'>
      <p>
        <span>{state.result.years===null?'--':<AnimatedNumber value={state.result.years} duration={300} formatValue={formatValue} />}</span> years
      </p>
      <p>
        <span>{state.result.month===null?'--':<AnimatedNumber value={state.result.month} duration={300} formatValue={formatValue} />}</span> month
      </p>
      <p>
        <span>{state.result.day===null?'--':<AnimatedNumber value={state.result.day} duration={300} formatValue={formatValue} />}</span> days
      </p>
    </div>
  );
};

export default Result;
