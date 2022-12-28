import express from 'express';
const router = express.Router();

import {
  getJobs,
  addJob,
  deleteJob,
  updateJob
} from '../controllers/jobsController.js';

router.route('/').get(getJobs).post(addJob);
router.route('/:id').delete(deleteJob).put(updateJob);

export default router;
