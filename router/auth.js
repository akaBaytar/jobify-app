import { Router } from 'express';

import { login, register } from '../controllers/auth.js';
import { validateUserInput } from '../middleware/validation.js';

const router = Router();

router.post('/register', validateUserInput, register);
router.post('/login', login);

export default router;
