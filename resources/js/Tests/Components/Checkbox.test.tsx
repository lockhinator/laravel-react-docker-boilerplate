import React from 'react';
import { render, screen } from '@testing-library/react';
import { Checkbox, CheckboxInterface } from '../../Components/Checkbox';
import userEvent from '@testing-library/user-event';

describe('Checkbox', () => {

    const mockProps = (
        overrideProps: Partial<CheckboxInterface> = {}
    ): CheckboxInterface => ({
        name: 'my-checkbox',
        value: 'myvalue',
        handleChange: jest.fn(),
        disabled: false,
        ...overrideProps
    });

    // prevent duplicating this a bunch of times
    // use this function to get the element we are testing
    const element = (): HTMLElement | SVGElement => screen.getByTestId('test-checkbox');

    it('renders Checkbox', () => {
        render(<Checkbox {...mockProps()} />);

        expect(element()).toBeInTheDocument();
    });

    it('triggers change handler when clicked', async () => {
        const mock = jest.fn();
        const props = mockProps({
            handleChange: mock,
        });

        render(<Checkbox {...props} />);

        expect(element()).toBeInTheDocument();

        // test the click to check the box
        await userEvent.click(element());
        expect(element()).toBeChecked();
        expect(mock).toHaveBeenCalled();

        // test the click to uncheck the box
        await userEvent.click(element());
        expect(element()).not.toBeChecked();
        expect(mock).toHaveBeenCalledTimes(2);
    });

    it('does not trigger change handler when clicked and disabled', async () => {
        const mock = jest.fn();
        const props = mockProps({
            disabled: true,
            handleChange: mock,
        });

        render(<Checkbox {...props} />);

        expect(element()).toBeInTheDocument();

        // test the click to check the box
        await userEvent.click(element());
        expect(element()).not.toBeChecked();
        expect(mock).not.toHaveBeenCalled();
    });
});
