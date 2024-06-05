/**
 * @module Main
 */

import React from 'react';

const Main = ({ children, className }) => {
    return (
        <main className={`mt-3 ${className}`}>
            {children}
        </main>
    );
}

export default Main;