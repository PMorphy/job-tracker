import Job from '../models/jobModel.js';

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    return res.status(200).json(jobs);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const addJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    return res.status(201).json({ job });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ error: messages });
    } else {
      return res.status(500).json({ error });
    }
  }
};

const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: 'No Job Found' });
    }

    await job.remove();
    return res.status(200).json({ message: 'Job Removed' });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(400).json({ error: 'Unable to Find Job' });
    }

    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).json(updatedJob);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export { getJobs, addJob, deleteJob, updateJob };
