import React from 'react';

export const MyInput = props => {
    const {input, type, placeholder, meta}=props;
    return (
        <div>
            <input {...input} type={type} placeholder={placeholder} />
        </div>
    );
};