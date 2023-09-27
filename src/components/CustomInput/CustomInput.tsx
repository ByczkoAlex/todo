import React, {ChangeEvent} from 'react';
import s from './CustomInput.module.css'

type propsType = {
    id: string
    name: string
    value: string
    onChange: { (e: ChangeEvent<any>): void;}
    autoFocus?: boolean
    onBlur?: () => void
}

const CustomInput = (props: propsType) => {
    return (
        <input type="text" className={s.input} {...props}/>
    );
};

export default CustomInput;
