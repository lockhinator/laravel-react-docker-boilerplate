import React from 'react';

interface LabelInterface {
    forInput: string,
    value?: string,
    className?: string,
    children?: JSX.Element,
}

export const Label = ({ className = '', ...props}: LabelInterface): JSX.Element => (
    <label htmlFor={props.forInput} className={'block font-medium text-sm text-gray-700 ' + className}>
        {props.value ? props.value : props.children}
    </label>
);
