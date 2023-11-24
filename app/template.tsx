'use client';

import './globals.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { createContext, useContext, useState } from 'react';
import Footer from './components/Footer';

const PageContext = createContext(0);

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [page, setPage] = useState(0);

    return (
        <PageContext.Provider value={page}>
            <Header />
            <div className="w-full h-full flex flex-row">
                <Navbar setPage={setPage} />

                {children}

                <Footer />
            </div>
        </PageContext.Provider>
    );
}

export const usePageContext = () => useContext(PageContext);
