import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, ButtonInterface } from '../../Components/Button';

describe('Button', () => {

    const buttonLabel = 'test-button';

    const mockProps = (
        overrideProps: Partial<ButtonInterface> = {}
    ): ButtonInterface => ({
        type: 'button',
        label: buttonLabel,
        processing: false,
        ...overrideProps
    });

    it('renders ApplicationLogo', () => {
        render(<Button {...mockProps({ label: buttonLabel })}>Hello</Button>);

        expect(screen.getByTestId(buttonLabel)).toBeInTheDocument();
    });
});
