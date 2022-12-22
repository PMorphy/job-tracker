import express from 'express';
const router = express.Router();

import { getJobs, addJob, deleteJob } from '../controllers/jobsController.js';

router.route('/').get(getJobs).post(addJob);
router.route('/:id').delete(deleteJob);

export default router;
