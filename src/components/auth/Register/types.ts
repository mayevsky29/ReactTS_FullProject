export enum RegisterActionTypes {
    REGISTER_START = "REGISTER_START",
    REGISTER_SUCCESS = "REGISTER_SUCCESS",
}

export interface RegisterState {
    data: string,
    isRegister: boolean,
}

export interface RegisterStartAction {
    type: RegisterActionTypes.REGISTER_START;
  }
  
  export interface RegisterSuccessAction {
    type: RegisterActionTypes.REGISTER_SUCCESS;
    payload: string;
  }
  
  export type RegisterAction =
    | RegisterStartAction
    | RegisterSuccessAction
  ;

  export interface IRegister {
      name?: string;
      email?: string;
      photo?: FileList[];
      password?: string;
      confirmPassword?: string;
  }

  export type RegisterError = {
    email: Array<string>, 
    password: Array<string>, 
    confirmPassword: Array<string>, 
  };
  
  export type RegisterErrors = {
    errors: RegisterError,
    status: number, 
  };