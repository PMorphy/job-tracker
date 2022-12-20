import { createContext, useReducer } from 'react';
import data from '../data';
import AppReducer from './AppReducer';

export const GlobalContext = createContext({ jobs: data.jobs });

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, { jobs: data.jobs });
  return (
    <GlobalContext.Provider value={{ jobs: state.jobs }}>
      {children}
    </GlobalContext.Provider>
  );
};
