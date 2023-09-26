import React from 'react';
import s from './Form.module.css'
import {useFormik} from "formik";
import CustomInput from "../CustomInput/CustomInput";
import CustomBtn from "../CustomBtn/CustomBtn";

const Form = () => {

    const createTaskFormik = useFormik({
        initialValues: {
            category: '',
        },
        onSubmit: values => {
            console.log(values)
        }
    })

    return (
        <div className={s.wrapper}>

            <div className={s.title}>
                Please enter category name
            </div>

            <form className={s.form} onSubmit={createTaskFormik.handleSubmit}>
                <CustomInput
                    id={"category"}
                    name={"category"}
                    value={createTaskFormik.values.category}
                    onChange={createTaskFormik.handleChange}
                />
                <div className={s.button_wrapper}>
                    <CustomBtn type={"submit"} title={"Create"}/>
                </div>
            </form>



        </div>
    );
};

export default Form;
