const mockLoginData = {
  errorResponse: {
    message: 'Login failed',
  },
  successResponse: {
    token: 'xcsdhcvshdcvdhsvh',
    status: 200,
    data: [
      {
        id: 1,
        name: 'my name',
      },
    ],
  },
  loginData: {
    email: 'john.doe@gmail.com',
    password: 'password',
  },
};

export default mockLoginData;
