import React, {ChangeEvent} from 'react';
import s from './CustomInput.module.css'

type propsType = {
    id: string
    name: string
    value: string
    onChange: { (e: ChangeEvent<any>): void;}
}

const CustomInput = (props: propsType) => {
    return (
        <input type="text" className={s.input} {...props}/>
    );
};

export default CustomInput;
