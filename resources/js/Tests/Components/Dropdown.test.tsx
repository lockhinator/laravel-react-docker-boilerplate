import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from '../../Components/Dropdown';

describe('Dropdown', () => {

    const DropDownElement = (): JSX.Element => (
        <Dropdown>
            <Dropdown.Trigger>
                <span className="inline-flex rounded-md">
                    <button
                        type="button"
                        data-testid="test-dropdown-trigger"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                        A Name
                        <svg className="ml-2 -mr-0.5 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                </span>
            </Dropdown.Trigger>

            <Dropdown.Content>
                <Dropdown.Link href={'#'} method="post" as="button">
                    Log Out
                </Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
    );

    it('renders Dropdown', () => {
        render(<DropDownElement />);

        expect(screen.getByTestId('test-dropdown-trigger')).toBeInTheDocument();
        expect(screen.queryAllByRole('button', { name: 'Log Out' })).toHaveLength(0);
    });

    it('shows content on Dropdown click', async () => {
        render(<DropDownElement />);

        const trigger = screen.getByTestId('test-dropdown-trigger');

        expect(trigger).toBeInTheDocument();
        await userEvent.click(trigger);
        expect(screen.getByRole('button', { name: 'Log Out' })).toBeInTheDocument();
    });
});
