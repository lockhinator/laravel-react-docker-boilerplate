import React from 'react';
import { render, screen } from '@testing-library/react';
import { ResponsiveNavLink, ResponsiveNavLinkInterface } from '../../Components/ResponsiveNavLink';

describe('ResponsiveNavLink', () => {

    const mockProps = (
        overrideProps: Partial<ResponsiveNavLinkInterface> = {}
    ): ResponsiveNavLinkInterface => ({
        href: '#',
        ...overrideProps
    });

    it('renders ResponsiveNavLink with string', () => {
        const props = mockProps({
            children: 'Im a String!'
        });
        render(<ResponsiveNavLink {...props} />);

        expect(screen.getByRole('link', { name: 'Im a String!' })).toBeInTheDocument();
    });

    it('renders NavLink with JS.Element child', () => {
        const props = mockProps({
            children: <div>Some Link JSX</div>
        });
        render(<ResponsiveNavLink {...props} />);

        expect(screen.getByText('Some Link JSX')).toBeInTheDocument();
    });
});
