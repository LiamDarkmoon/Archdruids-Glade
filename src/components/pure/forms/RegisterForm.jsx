import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';
import { Modal } from 'react-bootstrap'
import Bttn from '../Btn';
import { Facebook, Google, Twitter } from '@mui/icons-material';


const RegisterForm = () => {

    const [show, setShow] = useState(false)
    const [hover, setHover] = useState(false)

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(8, 'username must have at least 8 characters')
                .max(16, 'Max 16 characters')
                .required('username is required please enter one'),
            email: Yup.string()
                .email('Invalid email please try again')
                .required('Please enter an email'),
                password: Yup.string()
                .required('Please enter a password')
                .min(8, 'Password is too short')
                .max(16, 'Max 16 characters'),
                confirm: Yup.string()
                .when('password',  {
                    is: value => (value && value.length > 0 ? true : false),
                    then: () => Yup.string().oneOf(
                        [Yup.ref('password')],
                        '¡Passwords must match!'
                        ),
                        otherwise: () => Yup.string().required('Please confirm Password')
                    }),
                role: Yup.string()
                    .oneOf([ROLES.USER, ROLES.ADMIN], 'You mas select a role')
                    .required('Required'),
        }
    )

    const handleShowingBttn = () => {
        setShow(!show)
    }

    const handleHover = () => {
        setHover(!hover)
    }

    return (
        <div className='bttn-conteiner'>
            <Bttn click={ handleShowingBttn } text='Sign Up'/>
            <Modal show={ show } onHide={() =>  { handleShowingBttn(); handleHover(); } }>
                <Formik
                    initialValues = { initialValues }
                    validationSchema = { registerSchema }
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 2000));
                        alert(JSON.stringify(values, null, 2));
                        localStorage.setItem('credential', values);
                    }}
                >
                {({ values,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form className='form text-center rounded'>
                            <h1 className='mb-4'>Sign Up</h1>
                            <div className='form-floating my-2'>
                                <Field className='form-control' id='username' type='text' name='username' placeholder='LiamDarkmoon' />
                                <label htmlFor='username'>Username</label>
                                <ErrorMessage className='text-danger' component='div' name='username'/>
                            </div>
                            <div className='form-floating my-2'>
                                <Field className='form-control' id='email' type='email' name='email' placeholder='LiamDarkmoon@gmail.com' />
                                <label htmlFor='email'>Email</label>
                                <ErrorMessage className='text-danger' component='div' name='email'/>
                            </div>
                            <div className='form-floating my-2'>
                                <Field className='form-control' id='password' type='password' name='password' placeholder='Password Here' />
                                <label htmlFor='password'>Password</label>
                                <ErrorMessage className='text-danger' component='div' name='password'/>
                            </div>
                            <div className='form-floating my-2'>
                                <Field className='form-control' id='confirm' type='password' name='confirm' placeholder='Confirm Password' />
                                <label htmlFor='confirm'>Confirm Password</label>
                                <ErrorMessage className='text-danger' component='div' name='confirm'/>
                            </div>
                            <div className='row justify-content-center m-4 p-0'>
                                <button className='bttn' type='submit' >Register Account</button>
                                <span className='separator col my-2'></span>
                                <button className='secondary-bttn mb-1'type='button' onMouseOver={ handleHover }  > Sign up with </button>    
                                {
                                    hover ?
                                    <>
                                        <button className='secondary-bttn'type='button' > <Google/> Sign up with  Google</button>
                                        <button className='secondary-bttn my-1'type='button' > <Facebook/> Sign up with Facebook</button>
                                        <button className='secondary-bttn'type='button' > <Twitter/> Sign up with Twitter</button>
                                    </>

                                    :

                                    null
                                }
                            </div>
                        </Form>
                    )
                }
                </Formik>
            </Modal>
        </div>
    );
}

export default RegisterForm;
