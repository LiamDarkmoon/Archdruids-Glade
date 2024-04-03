import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage, } from 'formik';
import { login } from '../../../services/axios-crud-service';
import { Modal } from 'react-bootstrap'
import Bttn from '../Btn';
import { Facebook, Google, Twitter } from '@mui/icons-material';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid Email, please try again')
                .required('Email is required'),
        password: Yup.string()
                .required('Password is required')

    }
);


const LoginForm = () => {

    const [show, setShow] = useState(false)

    const initialCredentials = {
        email: '',
        password: ''
    }

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if(response.data.token){
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem('token', response.data.token)
                } else {
                    sessionStorage.removeItem('token')
                    throw new Error('Login failure')
                }
            })
            .catch((error) => {
                alert('Ups we are under atack' + error)
                sessionStorage.removeItem('token')
            })
            .finally(() => {
                alert('Go home Bobo')
            })
    }

    const handleShowingBttn = () => {
        setShow(!show)
    }


    return (
        <div>
            <Bttn className='secondary-bttn' click={ handleShowingBttn } text='Sign in'/>
            <Modal show={ show } onHide={ handleShowingBttn }>
                <Formik
                    initialValues = { initialCredentials }
                    validationSchema = { loginSchema }
                    onSubmit={async (values) => {
                        authUser(values)
                    }}
                    >

                    {({ isSubmitting }) => (
                        <Form className='form text-center rounded '>
                        <h1 className='mb-4'>Sign in</h1>
                        <div className='form-floating my-2'>
                            <Field className='form-control' id='email' type='email' name='email' placeholder='Camilolopez@gmail.com'/>
                            <label className='form-label' htmlFor='email'>Email</label>
                            <ErrorMessage className='text-danger' component='div' name='email'/>
                        </div>
                        <div className='form-floating my-2'>
                            <Field className='form-control' id='password' type='password' name='password' placeholder='Password'/>
                            <label className='form-label' htmlFor='password'>Password</label>
                            <ErrorMessage className='text-danger' component='div' name='password'/>
                        </div>
                        <div className='row justify-content-center m-4 p-0'>
                            <button className='bttn' type='submit' >Login</button>
                            <span className='separator col my-2'></span>
                            <button className='secondary-bttn'type='button' > <Google/> Sign in with  Google</button>
                            <button className='secondary-bttn my-1'type='button' > <Facebook/> Sign in with Facebook</button>
                            <button className='secondary-bttn'type='button' > <Twitter/> Sign in with Twitter</button>
                        </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </div>
    );
}

export default LoginForm;
