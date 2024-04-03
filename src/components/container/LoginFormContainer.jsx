import { connect } from 'react-redux'
import { httpsRequest } from '../../store/actions/asyncActions'
import LoginForm from '../pure/forms/LoginForm'


const mapStateToProps = (state) => {

    return {
        loged: state.userState.loged,
        fetching: state.userState.fetching

    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onLogin: (email, password) =>{

            const data = {
                email: email,
                password: password
            }

            const url = ('https://reqres.in/api/login')

            dispatch(httpsRequest('post', url, data ));
        }
    }
}

export const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

export default LoginFormContainer