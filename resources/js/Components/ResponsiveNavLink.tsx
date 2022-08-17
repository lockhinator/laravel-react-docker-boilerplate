import React from 'react';
import { Link } from '@inertiajs/inertia-react';

interface ResponsiveNavLinkInterface {
    method?: string,
    as?: string,
    href: string,
    active?: boolean,
    children?: JSX.Element,
}

export const ResponsiveNavLink = ({ method = 'get', as = 'a', active = false, ...props }: ResponsiveNavLinkInterface): JSX.Element => (
    <Link
        method={method}
        as={as}
        href={props.href}
        className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
            active
                ? 'border-indigo-400 text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700'
                : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'
        } text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
    >
        {props.children}
    </Link>
);
