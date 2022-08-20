import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input, InputInterface } from '../../Components/Input';
import userEvent from '@testing-library/user-event';

describe('Input', () => {

    const mockProps = (
        overrideProps: Partial<InputInterface> = {}
    ): InputInterface => ({
        type: 'text',
        name: 'my-input',
        className: '',
        autoComplete: '',
        required: false,
        isFocused: false,
        handleChange: jest.fn(),
        ...overrideProps
    });

    it('renders Input', () => {
        render(<Input {...mockProps()} />);

        expect(screen.getByTestId('test-input')).toBeInTheDocument();
    });

    it('triggers onChange event and value is updated when entering text', async () => {
        const mock = jest.fn();
        const props = mockProps({
            handleChange: mock
        });
        render(<Input {...props} />);

        const input = screen.getByTestId('test-input');

        expect(input).toBeInTheDocument();
        await userEvent.clear(input);
        await userEvent.type(input, 'Hello!');
        expect(mock).toHaveBeenCalledTimes(6);
        expect(input).toHaveValue('Hello!');
    });
});
