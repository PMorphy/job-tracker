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
        job: {}
      };
    default:
      return state;
  }
};

export default reducer;
