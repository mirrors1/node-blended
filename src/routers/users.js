import { Router } from 'express';
import { createUserSchema, loginUserSchema } from '../validation/users.js';
import { validateBody } from '../utils/validateBody.js';
import {
  loginUserController,
  registerUserController,
} from '../controllers/users.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const usersRouter = Router();

usersRouter.post(
  '/users/register',
  validateBody(createUserSchema),
  ctrlWrapper(registerUserController),
);

usersRouter.post(
  '/user/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

export default usersRouter;
