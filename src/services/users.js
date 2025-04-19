import { UserCollection } from '../db/models/User.js';
import bcrypt from 'bcrypt';
import { SessionCollection } from '../db/models/Session.js';
import { createSession } from '../utils/createSession.js';

export const findUserByEmail = (email) => UserCollection.findOne({ email });

export const createUser = async (userData) => {
  const encryptedPassword = await bcrypt.hash(userData.password, 10);

  return UserCollection.create({
    ...userData,
    password: encryptedPassword,
  });
};

export const createActiveSession = async (userId) => {
  await SessionCollection.deleteOne({ userId });
  return SessionCollection.create({ userId, ...createSession() });
};
