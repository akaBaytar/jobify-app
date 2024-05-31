import { Router } from 'express';

import { login, register, logout } from '../controllers/auth.js';
import { validateUserInput, validateUser } from '../middleware/validation.js';
import { apiLimiter } from '../utilities/apiLimiter.js';

const router = Router();

router.get('/logout', apiLimiter, logout);
router.post('/login', apiLimiter, validateUser, login);
router.post('/register', validateUserInput, register);

export default router;
