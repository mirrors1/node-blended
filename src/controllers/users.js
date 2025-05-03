import createHttpError from 'http-errors';
import {
  createUser,
  findUserByEmail,
  updateUserWithToken,
} from '../services/users.js';
import bcrypt from 'bcrypt';
// import { createActiveSession } from '../services/users.js';

export const registerUserController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);
  if (user) {
    throw createHttpError(409, 'Email in use');
  }
  const newUser = await createUser(req.body);
  res.status(201).json({
    user: { name: newUser.name, email: newUser.email },
    token: newUser.token,
  });
};

export const loginUserController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);
  if (!user) {
    throw createHttpError(401, 'Email or password invalide');
  }
  const isCorrectPassword = await bcrypt.compare(
    req.body.password,
    user.password,
  );
  if (!isCorrectPassword) {
    throw createHttpError(401, 'Email or password invalide');
  }

  const loginedUser = await updateUserWithToken(user._id);
  res.status(200).json({
    user: { name: loginedUser.name, email: loginedUser.email },
    token: loginedUser.token,
  });
};
