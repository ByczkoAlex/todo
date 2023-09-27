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
            taskId: '',
            categoryId: props.id
        },
        onSubmit: (values, formikHelpers) => {
            const prepareValues = {
                ...values,
                taskId: uuidv4()
            }

            dispatch(createTaskThunk(prepareValues))

            formikHelpers.resetForm()
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
                {props?.tasks?.map((task) =>
                    <Task
                        key={task.taskId}
                        taskId={task.taskId}
                        name={task.name}
                        categoryId={task.categoryId}
                    />
                )}
            </div>
        </div>
    );
};

export default Category;
