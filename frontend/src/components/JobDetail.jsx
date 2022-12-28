import React, { useContext, useRef, useEffect, useState } from 'react';
import moment from 'moment';
import { GlobalContext } from '../context/GlobalState';

const initialFormData = {
  title: '',
  description: '',
  isUrgent: false,
  requestedOn: '',
  finishedOn: ''
};

const JobDetail = () => {
  const { job, clearJob, addJob, updateJob, error, loading } = useContext(
    GlobalContext
  );
  const [formData, setFormData] = useState(initialFormData);
  const { title, description, isUrgent, requestedOn, finishedOn } = formData;

  const handleChange = (e) => {
    const { type, checked, name, value } = e.target;
    if (type === 'checkbox') {
      setFormData((prevFormData) => {
        return { ...prevFormData, [name]: checked ? true : false };
      });
    } else {
      setFormData((prevFormData) => {
        return { ...prevFormData, [name]: value };
      });
    }
  };

  const titleRef = useRef();
  const descriptionRef = useRef();
  const isUrgentRef = useRef();
  const requestedOnRef = useRef();
  const finishedOnRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      isUrgent: isUrgentRef.current.checked,
      requestedOn: requestedOnRef.current.value,
      finishedOn: finishedOnRef.current.value
    };

    if (job) {
      newJob._id = job._id;
      updateJob(newJob);
    } else {
      addJob(newJob);
      clearJob();
      setFormData(initialFormData);
      clearInputs();
      titleRef.current.focus();
    }
  };

  const handleClearJob = () => {
    clearJob();
    setFormData(initialFormData);
    clearInputs();
  };

  const clearInputs = () => {
    titleRef.current.value = '';
    descriptionRef.current.value = '';
    isUrgentRef.current.checked = false;
    requestedOnRef.current.value = '';
    finishedOnRef.current.value = '';
  };

  const isFormBlank = () => {
    return (
      title === '' &&
      description === '' &&
      isUrgent === false &&
      requestedOn === '' &&
      finishedOn === ''
    );
  };

  const formIsValidated = () => {
    return title !== '' && description !== '';
  };

  useEffect(() => {
    if (job) {
      titleRef.current.value = job.title || '';
      descriptionRef.current.value = job.description || '';
      isUrgentRef.current.checked = job.isUrgent || false;

      requestedOnRef.current.value = job.requestedOn
        ? moment(job.requestedOn).format('YYYY-MM-DD')
        : null;

      finishedOnRef.current.value = job.finishedOn
        ? moment(job.finishedOn).format('YYYY-MM-DD')
        : null;
    } else {
      setFormData(initialFormData);
      clearInputs();
    }
  }, [job]);

  return (
    <section>
      <h3 className='lead'>{job ? 'Edit Job' : 'Add Job'}</h3>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            ref={titleRef}
            id='title'
            name='title'
            onChange={handleChange}
          />
        </div>
        <div className='form-control description'>
          <label htmlFor='description'>Description</label>
          <textarea
            ref={descriptionRef}
            id='description'
            name='description'
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <input
            type='checkbox'
            ref={isUrgentRef}
            id='urgent'
            name='isUrgent'
            onChange={handleChange}
          />{' '}
          <label htmlFor='urgent'>Urgent?</label>
        </div>
        <div className='form-control'>
          <input
            type='date'
            ref={requestedOnRef}
            name='requestedOn'
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <input
            type='date'
            ref={finishedOnRef}
            name='finishedOn'
            onChange={handleChange}
          />
        </div>
        <div className='form-buttons'>
          <button
            className='btn btn-danger'
            onClick={handleClearJob}
            disabled={!job && isFormBlank()}
          >
            Clear
          </button>
          <button
            className='btn btn-primary'
            type='submit'
            disabled={!job && !formIsValidated()}
          >
            {job ? 'Update' : 'Add'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobDetail;
