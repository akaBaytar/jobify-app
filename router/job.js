import { Router } from 'express';

import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} from '../controllers/job.js';

import { demo } from '../middleware/authenticate.js';
import { validateInput, validateID } from '../middleware/validation.js';

const router = Router();

router.route('/').get(getAllJobs).post(demo, validateInput, createJob);

router
  .route('/:id')
  .get(validateID, getJob)
  .patch(demo, validateInput, validateID, updateJob)
  .delete(demo, validateID, deleteJob);

export default router;
