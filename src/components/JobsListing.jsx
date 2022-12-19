import React from 'react';
import JobListing from './JobListing';

const JobsListing = ({ jobs }) => {
  return (
    <ul>
      {jobs.map((job) => (
        <JobListing key={job.id} job={job} />
      ))}
    </ul>
  );
};

export default JobsListing;
