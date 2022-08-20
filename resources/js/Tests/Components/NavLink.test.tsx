import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavLink, NavLinkInterface } from '../../Components/NavLink';

describe('NavLink', () => {

    const mockProps = (
        overrideProps: Partial<NavLinkInterface> = {}
    ): NavLinkInterface => ({
        href: '#',
        active: false,
        children: 'this link',
        ...overrideProps
    });

    it('renders NavLink with string', () => {
        render(<NavLink {...mockProps()} />);

        expect(screen.getByRole('link', { name: 'this link' })).toBeInTheDocument();
    });

    it('renders NavLink with JS.Element child', () => {
        const props = mockProps({
            children: <div>Some Link JSX</div>
        });
        render(<NavLink {...props} />);

        expect(screen.getByText('Some Link JSX')).toBeInTheDocument();
    });
});
