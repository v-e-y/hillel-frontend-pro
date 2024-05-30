/**
 * Link component
 * @param {string} to - URL to link to
 * @param {string} text - Text to display
 * @param {string} title - Title attribute
 */

import React from 'react';

const Link = ({ to, text, title = '' }) => (
    <a 
        href={to} 
        title={title}
    >
        {text}
    </a>
);

export default Link;
