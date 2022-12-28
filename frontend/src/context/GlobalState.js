import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  jobs: [],
  job: null,
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

  const addJob = async (job) => {
    try {
      const config = {
        'Content-Type': 'application/json'
      };
      const { data } = await axios.post('/api/jobs', job, config);

      dispatch({
        type: 'ADD_JOB',
        payload: data.job
      });
    } catch (error) {
      dispatch({
        type: 'JOB_FAIL',
        payload: error.response.data.error
      });
    }
  };

  const updateJob = async (job) => {
    try {
      await axios.put(`/api/jobs/${job._id}`, job);
      dispatch({
        type: 'UPDATE_JOB',
        payload: job
      });
    } catch (error) {
      dispatch({
        type: 'JOB_FAIL',
        payload: error.response.data.error
      });
    }
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
        job: state.job,
        error: state.error,
        loading: state.loading,
        addJob,
        updateJob,
        deleteJob,
        getJobs,
        setJob,
        clearJob
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
