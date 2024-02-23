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
    prefixName: user.prefixName,
    phoneNumber:user.phoneNumber,
    nameForPatients: user.nameForPatients,
    nameForGroupPractice: user.nameForGroupPractice,
    twoFactorAuthentication: user.twoFactorAuthentication,
    notifications: user.notifications,
    avatarUrl: user.avatarUrl,
    startOfTherapy: user.startOfTherapy,
    practiceTime: user.practiceTime,
    subscriptionExpireAt: user.subscriptionExpireAt
  };
};

export const authService = {
  createUser,
  normalize,
};
