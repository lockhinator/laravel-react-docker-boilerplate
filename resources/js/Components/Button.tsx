import React from 'react';

export interface ButtonInterface {
    type?: 'button' | 'submit' | 'reset' | undefined,
    label?: string,
    className?: string,
    processing?: boolean,
    onClickHandler?: (e) => void,
    children?: JSX.Element | string,
}

export const Button = ({ type = 'submit', className = '', label = 'button', ...props }: ButtonInterface): JSX.Element => (
        <button
            data-testid={label}
            type={type}
            onClick={props.onClickHandler}
            className={
                `inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${
                    props.processing && 'opacity-25'
                } ` + className
            }
            disabled={props.processing}
        >
            {props.children}
        </button>
);
