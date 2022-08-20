import React from 'react';

export interface CheckboxInterface {
    name: string;
    value: string;
    disabled?: boolean;
    handleChange: (e) => void;
}

export const Checkbox = ({ disabled = true, ...props }: CheckboxInterface): JSX.Element => (
        <input
            type="checkbox"
            name={props.name}
            value={props.value}
            data-testid="test-checkbox"
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={props.handleChange}
            disabled={disabled}
        />
    );
