import React from 'react';

interface InputErrorInterface {
    message: string,
    className?: string
}

export const InputError = ({ message, className = '' }: InputErrorInterface): JSX.Element => (
    message ? <p className={'text-sm text-red-600 ' + className}>{message}</p> : <></>
);
