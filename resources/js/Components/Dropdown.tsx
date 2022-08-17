import React, { useState, useContext, Fragment } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';

type DropdownContextType = {
    open: boolean;
    setOpen: (open: boolean) => void;
    toggleOpen: (open: boolean) => void;
}

let DropDownContext;

interface DropdownCommonInterface {
    children?: JSX.Element
}

const Dropdown = (props: DropdownCommonInterface): JSX.Element => {

    const [open, setOpen] = useState<boolean>(false);

    const toggleOpen = () => {
        setOpen((previousState: boolean) => !previousState);
    };

    DropDownContext = React.createContext<DropdownContextType>({
        open: open,
        setOpen: setOpen,
        toggleOpen: toggleOpen
    });

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="relative">{props.children}</div>
        </DropDownContext.Provider>
    );
};

const Trigger = (props: DropdownCommonInterface) => {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext);

    return (
        <>
            <div onClick={() => toggleOpen(open)}>{props.children}</div>

            {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}/>}
        </>
    );
};

interface ContentInterface extends DropdownCommonInterface {
    align?: string,
    width?: string,
    contentClasses?: string,
}
const Content = ({ align = 'right', width = '48', contentClasses = 'py-1 bg-white', ...props }: ContentInterface) => {
    const { open, setOpen } = useContext(DropDownContext);

    let alignmentClasses = 'origin-top';

    if (align === 'left') {
        alignmentClasses = 'origin-top-left left-0';
    } else if (align === 'right') {
        alignmentClasses = 'origin-top-right right-0';
    }

    let widthClasses = '';

    if (width === '48') {
        widthClasses = 'w-48';
    }

    return (
        <>
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div
                    className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
                    onClick={() => setOpen(false)}
                >
                    <div className={'rounded-md ring-1 ring-black ring-opacity-5 ' + contentClasses}>{props.children}</div>
                </div>
            </Transition>
        </>
    );
};

interface DropdownLinkInterface extends DropdownCommonInterface {
    href: string,
    method?: string,
    as?: string,
}
const DropdownLink = ({ href, method = 'post', as = 'a', ...props }: DropdownLinkInterface) => (
    <Link
        href={href}
        method={method}
        as={as}
        className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
    >
        {props.children}
    </Link>
);

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;

export { Dropdown };
