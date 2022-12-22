import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const JobDetail = () => {
  const { getJob } = useContext(GlobalContext);
  const { title, description } = getJob();
  return (
    <div>
      {title} {description}
    </div>
  );
};

export default JobDetail;
