import React from 'react';
import s from './CustomBtn.module.css'
import {useAppSelector} from "../../hooks/redux";

type PropsType = {
    title: string,
    onClick?: () => void;
    type?: string;
    style?: React.CSSProperties;
}

const CustomBtn: React.FC<PropsType> = ({type, title, ...props}) => {

    const {disabled} = useAppSelector(store => store.todoReducer)

    return (
        <button className={disabled ? s.disabled: s.my_btn}
                disabled={disabled}
                {...props}>
            {title}
        </button>
    );
};

export default CustomBtn;
