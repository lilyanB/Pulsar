import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import { MetaMaskButton } from "@metamask/sdk-react-ui";
import { useMetamaskHook } from '@/hooks/metamaskHook';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: false },
    { name: 'Wallet', href: '/wallet', current: false },
    { name: 'Analytics', href: '/analytics', current: false },
    { name: 'Pulsi', href: '/pulsi', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const { provider, chainID, switchToLinea } = useMetamaskHook()

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="block h-10 w-20px lg:hidden"
                                    src={'/images/Logo/logo.png'}
                                    alt="Logo"
                                    width={60}
                                    height={40}
                                />
                                <img
                                    className="hidden h-48px w-48px lg:block"
                                    src={'/images/Logo/logo.png'}
                                    alt="Logo"
                                    width={60}
                                    height={40}
                                />
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right ">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900' : 'navlinks text-white hover:text-offwhite hover-underline',
                                                'px-3 py-4 rounded-md text-lg font-normal'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                            </div>
                            <div className='hidden lg:flex justify-end text-xl font-semibold py-4 px-6 lg:px-12'>
                                {chainID != "0xe704" ? <button onClick={switchToLinea} className="border-2 border-red-500 hover:border-white hover:text-white text-red py-2 px-4 rounded">Switch to Linea</button> : <MetaMaskButton theme="dark" color="white" />}
                            </div>
                            {/* <Contactusform /> */}
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
