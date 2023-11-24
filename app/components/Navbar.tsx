'use client';

import pages from '../config/navbar.conf.json';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { usePageContext } from '../template';

const Navbar = ({ setPage }: any) => {
    const path = usePathname();
    const navbar = useRef<any>();
    const currentPage = usePageContext();
    let items: any;

    useEffect(() => {
        if (!path || !navbar) return;

        if (!items)
            items = Array.from(navbar.current!.children);

        const parts = path.split('/');
        const page = parts[parts.length - 1];

        const index = pages.findIndex(
            (entry) => entry.page == page
        );
        if (!index) return;
    }, [path, navbar]);

    function handleClick(index: number) {
        window.history.replaceState(
            {},
            pages[index] + '',
            `/${pages[index].page}`
        );
        setPage(index);
    }

    return (
        <nav
            ref={navbar}
            className="h-full left-0 flex flex-col w-[25rem] gap-[2rem] justify-center items-center border-r border-slate-700 border-opacity-5"
        >
            {pages.map((page, i) => (
                <button
                    key={i}
                    onClick={() => handleClick(i)}
                >
                    <p
                        data-role="nav-item"
                        className={`text-lg font-light ${
                            currentPage === i
                                ? 'active'
                                : ''
                        }`}
                    >
                        {page.text}
                    </p>
                </button>
            ))}
        </nav>
    );
};

export default Navbar;
