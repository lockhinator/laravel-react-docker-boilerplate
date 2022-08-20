import React, { useEffect, useRef, MutableRefObject } from 'react';

export interface InputInterface {
    type?: string
    name: string,
    value?: string,
    className: string,
    autoComplete?: string,
    required?: boolean,
    isFocused?: boolean,
    handleChange: (e) => void,
}

export const Input = ({type = 'text', required = false, autoComplete = '', isFocused = false, ...props}: InputInterface): JSX.Element => {
    const input = useRef() as MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        if (isFocused) {
            input.current?.focus();
        }
    }, [isFocused]);

    return (
        <div className="flex flex-col items-start">
            <input
                data-testid="test-input"
                type={type}
                name={props.name}
                value={props.value}
                className={
                    'border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ' +
                    props.className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={props.handleChange}
            />
        </div>
    );
};
