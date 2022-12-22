import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const JobListing = ({ job }) => {
  const { deleteJob, setJob } = useContext(GlobalContext);

  return (
    <article onClick={() => setJob(job)} className='job-card'>
      <div className='top'>
        <h4 className='title'>{job.title}</h4>
        <button className='btn btn-danger' onClick={() => deleteJob(job._id)}>
          x
        </button>
      </div>
    </article>
  );
};

export default JobListing;
