const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_JOBS':
      return {
        ...state,
        loading: false,
        jobs: payload
      };
    case 'ADD_JOB':
      return {
        ...state,
        jobs: [...state.jobs, payload]
      };
    case 'UPDATE_JOB':
      const jobExists = state.jobs.find((job) => job._id === payload._id);
      const jobs = jobExists
        ? state.jobs.map((job) => (job._id === payload._id ? payload : job))
        : [...state.jobs];

      return {
        ...state,
        jobs
      };
    case 'DELETE_JOB':
      return {
        ...state,
        jobs: state.jobs.filter((job) => job._id !== payload)
      };
    case 'JOB_FAIL':
      return {
        ...state,
        error: payload
      };
    case 'SET_JOB':
      return {
        ...state,
        job: payload
      };
    case 'CLEAR_JOB':
      return {
        ...state,
        job: null
      };
    default:
      return state;
  }
};

export default reducer;
