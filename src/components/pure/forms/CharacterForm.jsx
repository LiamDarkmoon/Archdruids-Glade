import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Character } from '../../../models/Character.class';

const CharacterForm = () => {

    const Char = new Character();

    const initialValues = {
        name: '',
        class: '',
        race: '',
        background: '',
        alignment: '',
        stats: [],
    }

    const characterSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(3, 'name must have at least 3 characters')
                .max(16, 'Max 16 characters')
                .required('¿whats your Name?'),
            class: Yup.string()
                .required('Please choose a class'),
            race: Yup.string()
                .required('let us know about you, whats your race'),
            background: Yup.string()
                .required('select a Background'),
            alignment: Yup.string()
                .required('Please enter a password'),
            stats: Yup.array()
                .required('select your stats')
                .min(5, 'Password is too short')
                .max(20, 'Max 16 characters'),
        }
    )

    const submit = (values) => {
        alert('Character created', values)
        console.log(values)
    }

    return (
        <div>
            <Formik
                initialValues = { initialValues }
                validationSchema = { characterSchema }
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 2000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('Character', values);
                    console.log('Character created', values)
                }}
            >
            {({ values,
                isSubmitting,
                handleChange,
                handleBlur }) => (
                    <Form className='border rounded m-3 p-4'>
                        <h1 className='mb-4'>Register Form</h1>
                        <div className='form-floating my-2'>
                            <Field className='form-control' id='name' type='text' name='name' placeholder='Liam Darkmoon' />
                            <label htmlFor='username'>Name</label>
                            <ErrorMessage className='text-danger' component='div' name='name'/>
                        </div>
                        
                        <div className='form-floating my-2'>
                            <Field className='form-control' id='class' type='text' name='class' placeholder='Druid' />
                            <label htmlFor='class'>Class</label>
                            <ErrorMessage className='text-danger' component='div' name='class'/>
                        </div>

                        <div className='form-floating my-2'>
                            <Field className='form-control' id='race' type='text' name='race' placeholder='high Elf' />
                            <label htmlFor='race'>race</label>
                            <ErrorMessage className='text-danger' component='div' name='race'/>
                        </div>

                        <div className='form-floating my-2'>
                            <Field className='form-control' id='background' type='text' name='background' placeholder='Hermit' />
                            <label htmlFor='background'>Background</label>
                            <ErrorMessage className='text-danger' component='div' name='background'/>
                        </div>



                        <button className='my-3' type='submit'>Create Character</button>
                        { isSubmitting ? (<h3>Creating your character</h3>) : null }
                    </Form>
                )
            }

            </Formik>
            
        </div>
    );
}

export default CharacterForm;
