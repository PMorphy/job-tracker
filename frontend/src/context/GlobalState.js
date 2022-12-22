import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  jobs: [],
  job: {},
  error: '',
  loading: true
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getJobs = async () => {
    try {
      const { data } = await axios('/api/jobs');

      dispatch({
        type: 'GET_JOBS',
        payload: data
      });
    } catch (error) {
      dispatch({
        type: 'JOB_FAIL',
        payload: error.response.data.error
      });
    }
  };

  const getJob = () => {
    return state.job;
  };

  const addJob = async (job) => {
    dispatch({
      type: 'ADD_JOB',
      payload: job
    });
  };

  const deleteJob = async (id) => {
    try {
      await axios.delete(`/api/jobs/${id}`);
      dispatch({
        type: 'DELETE_JOB',
        payload: id
      });
    } catch (error) {
      dispatch({
        type: 'JOB_FAIL',
        payload: error.response.data.error
      });
    }
  };

  const setJob = (job) => {
    dispatch({
      type: 'SET_JOB',
      payload: job
    });
  };

  const clearJob = () => {
    dispatch({
      type: 'CLEAR_JOB'
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        jobs: state.jobs,
        addJob,
        deleteJob,
        getJobs,
        setJob,
        getJob,
        clearJob,
        error: state.error,
        loading: state.loading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
