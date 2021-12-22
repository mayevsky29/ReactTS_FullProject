import * as AuthActions from '../../components/auth/Login/actions';
import * as RegisterAction from '../../components/auth/Register/actions';
import * as ProductActions from '../../components/products/actions';

const actions = {
    ...AuthActions,
    ...RegisterAction,
    ...ProductActions
}

export default actions; 