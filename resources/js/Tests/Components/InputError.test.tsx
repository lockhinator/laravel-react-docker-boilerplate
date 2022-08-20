import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputError, InputErrorInterface } from '../../Components/InputError';

describe('InputError', () => {

    const mockProps = (
        overrideProps: Partial<InputErrorInterface> = {}
    ): InputErrorInterface => ({
        message: 'My custom message',
        className: '',
        ...overrideProps
    });

    it('renders InputError', () => {
        const props = mockProps();
        render(<InputError {...props} />);

        expect(screen.getByText(props.message)).toBeInTheDocument();
    });

    it('does not render InputError with empty message', () => {
        const props = mockProps({
            message: ''
        });
        render(<InputError {...props} />);

        expect(screen.queryAllByTestId('test-input-error')).toHaveLength(0);
    });
});
