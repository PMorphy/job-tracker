import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const JobListing = ({ job }) => {
  const { deleteJob, setJob, job: ctxJob } = useContext(GlobalContext);
  const handleClick = (e) => {
    if (!e.target.classList.contains('btn-danger')) {
      setJob(job);
    }
  };

  const handleDelete = () => {
    if (ctxJob && ctxJob._id === job._id) {
      setJob(null);
      deleteJob(job._id);
    } else deleteJob(job._id);
  };

  return (
    <article onClick={handleClick} className={`job-card`}>
      <div className='top'>
        <h4 className='title'>{job.title}</h4>
        <button onClick={handleDelete} className='btn btn-danger'>
          x
        </button>
      </div>
    </article>
  );
};

export default JobListing;
