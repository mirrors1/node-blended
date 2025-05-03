import { UserCollection } from '../db/models/User.js';
import bcrypt from 'bcrypt';
// import { SessionCollection } from '../db/models/Session.js';
// import { createSession } from '../utils/createSession.js';
import jwt from 'jsonwebtoken';
import { env } from '../utils/env.js';

export const findUserByEmail = (email) => UserCollection.findOne({ email });

export const updateUserWithToken = async (id) => {
  const token = jwt.sign(
    {
      id,
    },
    env('JWT_SECRET'),

    { expiresIn: '30d' },
  );

  return UserCollection.findByIdAndUpdate(id, { token }, { new: true });
};

export const createUser = async (userData) => {
  const encryptedPassword = await bcrypt.hash(userData.password, 10);

  const user = await UserCollection.create({
    ...userData,
    password: encryptedPassword,
  });
  return updateUserWithToken(user._id);
};

// export const createActiveSession = async (userId) => {
//   await SessionCollection.deleteOne({ userId });
//   return SessionCollection.create({ userId, ...createSession() });
// };
