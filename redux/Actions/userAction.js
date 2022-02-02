import {USER_LOGIN, USER_SIGNUP} from '../Constant/UserConstant';

export const LoginUser = () => {
  return {
    type: USER_LOGIN,
    payload: {
      email: '',
      password: '',
    },
  };
};

export const SignUpAction = userInfo => {
  return {
    type: USER_SIGNUP,
    payload: userInfo,
  };
};
