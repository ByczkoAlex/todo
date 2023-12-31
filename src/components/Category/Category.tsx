import React from 'react';
import s from './Category.module.css'
import {TaskForCategoryType} from "../../store/reducers/todo/TodoSlice";
import {DeleteOutlined} from "@ant-design/icons";
import {useFormik} from "formik";
import {v4 as uuidv4} from "uuid";
import CustomInput from "../CustomInput/CustomInput";
import CustomBtn from "../CustomBtn/CustomBtn";
import {createTaskThunk, deleteCategoryThunk} from "../../store/ActionCreators/ActionCreators";
import {useAppDispatch} from "../../hooks/redux";
import Task from "../Task/Task";
import * as yup from "yup";

type PropsType = {
    name: string,
    tasks: TaskForCategoryType[]
    id: string
    creationDate: string
}

const validationSchema = yup.object({
    name: yup.string().required( 'required field'),
})

const Category = (props: PropsType) => {

    const dispatch = useAppDispatch()

    const createTaskFormik = useFormik({
        initialValues: {
            name: '',
            taskId: '',
            categoryId: props.id,
            creationDate: ''
        },
        validationSchema,
        onSubmit: (values, formikHelpers) => {
            const creationDate = new Date()
            const prepareValues = {
                ...values,
                taskId: uuidv4(),
                creationDate: creationDate.toDateString()
            }

            dispatch(createTaskThunk(prepareValues))

            formikHelpers.resetForm()
        }
    })

    return (
        <div className={s.category}>
            <div className={s.category_header}>
                <div className={s.category_info_block}>
                    <span className={s.category_name}>
                        {props.name}
                    </span>
                    <span className={s.creation_date}>
                        {props.creationDate}
                    </span>
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
                {
                    createTaskFormik.touched.name &&
                    createTaskFormik.errors.name &&
                    <div className={s.error}>
                        {createTaskFormik.errors.name}
                    </div>
                }
                <div className={s.button_wrapper}>
                    <CustomBtn type={"submit"} title={"Add"}/>
                </div>
            </form>

            <div className={s.tasks_list_block}>
                {props?.tasks?.map((task) =>
                    <Task
                        key={task.taskId}
                        taskId={task.taskId}
                        name={task.name}
                        categoryId={task.categoryId}
                        creationDate={task.creationDate}
                    />
                )}
            </div>
        </div>
    );
};

export default Category;
