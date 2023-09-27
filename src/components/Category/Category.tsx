import React from 'react';
import s from './Category.module.css'
import {TaskForCategoryType} from "../../store/reducers/todo/TodoSlice";
import {DeleteOutlined} from "@ant-design/icons";
import {useFormik} from "formik";
import {v4 as uuidv4} from "uuid";
import CustomInput from "../CustomInput/CustomInput";
import CustomBtn from "../CustomBtn/CustomBtn";
import {List} from "antd";
import {deleteCategoryThunk} from "../../store/ActionCreators/ActionCreators";
import {useAppDispatch} from "../../hooks/redux";

type PropsType = {
    name: string,
    tasks: TaskForCategoryType[]
    id: string
}

const Category = (props: PropsType) => {

    const dispatch = useAppDispatch()

    const createTaskFormik = useFormik({
        initialValues: {
            name: '',
            id: ''
        },
        onSubmit: values => {
            const prepareValues = {
                ...values,
                id: uuidv4()
            }

            // dispatch(CreateCategory(prepareValues))
        }
    })

    return (
        <div className={s.category}>
            <div className={s.category_header}>
                <div className={s.category_name}>
                    {props.name}
                </div>
                <DeleteOutlined className={s.delete} onClick={() => dispatch(deleteCategoryThunk(props.id))}/>
            </div>

            <form onSubmit={createTaskFormik.handleSubmit} className={s.add_task_form}>
                <CustomInput
                    id={"name"}
                    name={"name"}
                    value={createTaskFormik.values.name}
                    onChange={createTaskFormik.handleChange}
                />
                <div className={s.button_wrapper}>
                    <CustomBtn type={"submit"} title={"Add"}/>
                </div>
            </form>

            <div className={s.tasks_list_block}>

            </div>
        </div>
    );
};

export default Category;
