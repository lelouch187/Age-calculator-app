import { createContext } from 'react';

export const ContextApp = createContext();

export const initialState = {
  inputValue: { day: '', month: '', years: '' },
  error: { day: null, month: null, years: null },
  result: { day: null, month: null, years: null },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'DD':
      return { ...state, inputValue: { ...state.inputValue, day: action.payload } };
    case 'MM':
      return { ...state, inputValue: { ...state.inputValue, month: action.payload } };
    case 'YYYY':
      return { ...state, inputValue: { ...state.inputValue, years: action.payload } };
    case 'error':
      return { ...state, error: action.payload };
    case 'result':
      return { ...state, result: { day: action.payload.days, month: action.payload.months, years: action.payload.years } };  
      case 'reset':
         return { ...state, result: { day: null, month: null, years: null }};  
    default:
      return state;
  }
};
