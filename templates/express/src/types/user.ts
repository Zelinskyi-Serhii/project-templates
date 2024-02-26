export type User = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  activationCode?: number | null;
  resetPasswordCode?: number | null;
  avatarUrl?: string;
  phoneNumber: string | null;
  twoFactorAuthentication?: boolean;
  notifications?: boolean;
};
