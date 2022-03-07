import React from 'react'
import s from './Forms_controls.module.css'

export const Form_control = Element => ({ input, meta, ...props }) => {
    console.log(meta);
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.form_control + " " + (hasError && s.error)}>
            <Element {...input} {...props} />
            <div>
                {hasError && <span> {meta.error} </span>}
            </div>
        </div>
    );
};