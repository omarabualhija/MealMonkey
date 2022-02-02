import {USER_LOGIN, USER_SIGNUP} from '../Constant/UserConstant';

const initUser = {
  name: 'omar Abu Alhija',
  MobileNo: '962796918885',
  Address: 'Amman Jordan',
  Email: 'omar.hija12@gmail.com',
  Password: '123456Aa@',
};
export const UserInfo = (state = initUser, action) => {
  if (action.type === USER_LOGIN) {
    return {Email: state.Email, password: state.Password};
  }
  if (action.type === USER_SIGNUP) {
    return {
      ...state,
      name: action.payload.name,
      Email: action.payload.Email,
      Password: action.payload.Password,
      MobileNo: action.payload.MobileNo,
      Address: action.payload.Address,
    };
  }

  return state;
};

// if (action.type === USER_LOGIN) {
//     if (action.payload.email === '') return {message: 'Are you Singn up !'};
//   } else if (action.payload.email !== state.email) {
//     return {message: 'Please verify your email and password'};
//   }

//   if (action.payload.email === state.email) {
//     if (action.payload.password !== action.payload.password) {
//       return {message: 'Check Your Password'};
//     }
//   }
