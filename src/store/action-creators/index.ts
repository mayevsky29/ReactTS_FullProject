import * as AuthActions from '../../components/auth/Login/actions';
import * as RegisterAction from '../../components/auth/Register/actions';

const actions = {
    ...AuthActions,
    ...RegisterAction
}

export default actions; 