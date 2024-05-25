import { Router } from 'express';

import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} from '../controllers/job.js';

import { validateInput, validateID } from '../middleware/validation.js';

const router = Router();

router.route('/').get(getAllJobs).post(validateInput, createJob);

router
  .route('/:id')
  .get(validateID, getJob)
  .patch(validateInput, validateID, updateJob)
  .delete(validateID, deleteJob);

export default router;
