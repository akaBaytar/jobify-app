import { Router } from 'express';

import { getUser, updateUser, getAppStats } from '../controllers/user.js';
import { valideteUpdateUser } from '../middleware/validation.js';

const router = Router();

router.get('/me', getUser);
router.get('/admin/app-stats', getAppStats);
router.patch('/update', valideteUpdateUser, updateUser);

export default router;
