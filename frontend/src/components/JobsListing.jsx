import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import JobListing from './JobListing';

const JobsListing = () => {
  const { jobs } = useContext(GlobalContext);
  return (
    <ul>
      {jobs.map((job) => (
        <JobListing key={job.id} job={job} />
      ))}
    </ul>
  );
};

export default JobsListing;
