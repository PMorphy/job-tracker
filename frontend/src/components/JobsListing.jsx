import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import JobListing from './JobListing';

const JobsListing = () => {
  const { jobs, getJobs } = useContext(GlobalContext);
  useEffect(() => {
    getJobs();
  }, []);
  return (
    <ul>
      {jobs.length > 0 ? (
        jobs.map((job) => <JobListing key={job._id} job={job} />)
      ) : (
        <h2 className='lead'>No Jobs! You're Free to Relax</h2>
      )}
    </ul>
  );
};

export default JobsListing;
