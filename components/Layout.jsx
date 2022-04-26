import React from 'react';
import Head from "next/head";
import {Footer, Navbar} from "./index";

const Layout = ({children}) => (
    <div className='layout'>
        <Head>
            <title>BirtofHermes</title>
        </Head>

        <header>
            <Navbar/>
        </header>

        <main className='main-container'>
            {children}
        </main>

        <footer>
            <Footer/>
        </footer>
    </div>
);

export default Layout;