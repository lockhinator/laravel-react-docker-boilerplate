import React from 'react';

export interface InputErrorInterface {
    message: string,
    className?: string
}

export const InputError = ({ message, className = '' }: InputErrorInterface): JSX.Element => (
    message ? <p data-testid="test-input-error" className={'text-sm text-red-600 ' + className}>{message}</p> : <></>
);
