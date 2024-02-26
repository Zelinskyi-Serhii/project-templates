import { Users } from "../models/users.model";
import { User } from "../types/user";

const createUser = (user: User) => {
  return Users.findOrCreate({
    where: { email: user.email },
    defaults: {
      ...user,
    },
  });
};

const normalize = (user: User) => {
  return {
    id: user.id,
    firstName: user.firstName,
    email: user.email,
    lastName: user.lastName,
    phoneNumber:user.phoneNumber,
    twoFactorAuthentication: user.twoFactorAuthentication,
    notifications: user.notifications,
    avatarUrl: user.avatarUrl,
  };
};

export const authService = {
  createUser,
  normalize,
};
