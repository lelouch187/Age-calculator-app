import React, { useReducer } from 'react';
import Form from './components/Form';
import MyButton from './components/MyButton';
import Result from './components/Result';
import { ContextApp, initialState, reducer } from './Reducer';
import { isError } from './utils';
import { intervalToDuration } from 'date-fns';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const calculation = () => {
    if (Object.values(isError(state.inputValue)).find((item) => item !== null)) {
      dispatch({ type: 'error', payload: isError(state.inputValue) });
      dispatch({ type: 'reset' });
      return;
    }
    const result = intervalToDuration({
      start: new Date(),
      end: new Date(state.inputValue.years, state.inputValue.month-1, state.inputValue.day),
    });
    console.log(result)
    dispatch({ type: 'error', payload: isError(state.inputValue) });
    dispatch({ type: 'result', payload: result });
  };

  return (
    <ContextApp.Provider value={{ state, dispatch, calculation }}>
      <div className="wrapper">
        <div className="container">
          <div className="App">
            <Form />
            <MyButton />
            <Result />
          </div>
        </div>
      </div>
    </ContextApp.Provider>
  );
}

export default App;
