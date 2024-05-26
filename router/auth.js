import { Router } from 'express';

import { login, register, logout } from '../controllers/auth.js';
import { validateUserInput, validateUser } from '../middleware/validation.js';

const router = Router();

router.get('/logout', logout);
router.post('/login', validateUser, login);
router.post('/register', validateUserInput, register);

export default router;
