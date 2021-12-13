import { RegisterAction, RegisterState, RegisterActionTypes } from "./types";


const initialState: RegisterState = {
  data: '',
  isRegister: false,
};

export const registerReducer = ( state = initialState, action: RegisterAction): RegisterState => {
  switch (action.type) {
   
    case RegisterActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isRegister: true,
        data: action.payload, 
      };

    default:
      return state;
  }
};
