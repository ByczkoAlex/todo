import React from 'react';
import s from './Form.module.css'
import {useFormik} from "formik";
import CustomInput from "../CustomInput/CustomInput";
import CustomBtn from "../CustomBtn/CustomBtn";
import { v4 as uuidv4 } from 'uuid';
import {useAppDispatch} from "../../hooks/redux";
import {createCategoryThunk} from "../../store/ActionCreators/ActionCreators";
import * as yup from "yup";

const validationSchema = yup.object({
    name: yup.string().required( 'required field'),
})

const Form = () => {

    const dispatch = useAppDispatch()

    const createCategoryFormik = useFormik({
        initialValues: {
            name: '',
            tasks: [],
            id: '',
            creationDate: ''
        },
        validationSchema,
        onSubmit: (values, formikHelpers) => {
            const creationDate = new Date()
            const prepareValues = {
                ...values,
                id: uuidv4(),
                creationDate: creationDate.toDateString()
            }

            dispatch(createCategoryThunk(prepareValues))

            formikHelpers.resetForm()
        }
    })

    return (
        <div className={s.wrapper}>

            <div className={s.title}>
                Please enter category name
            </div>

            <form className={s.form} onSubmit={createCategoryFormik.handleSubmit}>
                <CustomInput
                    id={"name"}
                    name={"name"}
                    value={createCategoryFormik.values.name}
                    onChange={createCategoryFormik.handleChange}
                />
                {
                    createCategoryFormik.touched.name &&
                    createCategoryFormik.errors.name &&
                    <div className={s.error}>
                        {createCategoryFormik.errors.name}
                    </div>
                }
                <div className={s.button_wrapper}>
                    <CustomBtn type={"submit"} title={"Create"}/>
                </div>
            </form>
        </div>
    );
};

export default Form;
