import React from 'react';
import { render, screen } from '@testing-library/react';
import { ApplicationLogo, ApplicationLogoInterface } from '../../Components/ApplicationLogo';

describe('ApplicationLogo', () => {
    const mockProps = (
        overrideProps: Partial<ApplicationLogoInterface> = {}
    ): ApplicationLogoInterface => ({
        ...overrideProps
    });

    it('renders ApplicationLogo', () => {
        render(<ApplicationLogo {...mockProps()} />);

        expect(screen.getByTestId('application-logo')).toBeInTheDocument();
    });
});
