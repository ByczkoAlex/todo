import React from 'react';
import s from './Form.module.css'
import {useFormik} from "formik";

const Form = () => {

    const createTaskFormik = useFormik({
        initialValues: {
            code: '',
        },
        onSubmit: values => {
            console.log(values)

        }
    })

    return (
        <div className={s.wrapper}>

            <form className={s.form} onSubmit={createTaskFormik.handleSubmit}>
                Form
            </form>

        </div>
    );
};

export default Form;
