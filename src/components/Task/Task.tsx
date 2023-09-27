import React from 'react';
import s from './Task.module.css'
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

type PropsType = {
    id: string
    name: string
}

const Task = (props: PropsType) => {
    return (
        <div className={s.task_wrapper}>
            <div className={s.flex}>
                <EditOutlined className={s.edit}/>
                <div className={s.task_name} >
                    {props.name}
                </div>
            </div>

            <div>
                <DeleteOutlined className={s.delete}/>
            </div>
        </div>
    );
};

export default Task;
