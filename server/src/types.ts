export type User = {
  username: String;
  address: String;
};

export type UserCredentials = {
  username: String;
  password: String;
};

export type RegisterBody = User & UserCredentials;

export type ApiError = {
  errorMessage: string;
};
