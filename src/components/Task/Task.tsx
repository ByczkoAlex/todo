import React, {ChangeEvent, useState} from 'react';
import s from './Task.module.css'
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {useAppDispatch} from "../../hooks/redux";
import {deleteTaskThunk, editTaskThunk} from "../../store/ActionCreators/ActionCreators";
import CustomInput from "../CustomInput/CustomInput";

type PropsType = {
    name: string
    categoryId: string
    taskId: string
    creationDate: string
}

const Task = (props: PropsType) => {

    const dispatch = useAppDispatch()

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.name);

    const activateEditMode = () => {
        setEditMode(true);
        // setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        dispatch(editTaskThunk(title, props))
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <div className={s.task_wrapper}>
            <div className={s.flex}>
                <EditOutlined className={s.edit} onClick={activateEditMode}/>
                <div>
                    {
                        editMode
                            ? <CustomInput value={title}
                                           onChange={changeTitle}
                                           autoFocus
                                           onBlur={activateViewMode}
                                           id={"editTask"}
                                           name={"editTask"}
                            />
                            : <div className={s.task_info_block}>
                                <span className={s.task_name}>{props.name}</span>
                                <span className={s.creation_date}>
                                    {props.creationDate}
                                </span>
                              </div>
                    }

                </div>
            </div>

            <div>
                <DeleteOutlined className={s.delete} onClick={() => dispatch(deleteTaskThunk(props))}/>
            </div>
        </div>
    );
};

export default Task;
