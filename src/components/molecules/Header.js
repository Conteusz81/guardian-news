import React from 'react';

const Header = ({ title }) => {
    return (
        <header>
            <h2 className="text-gray-700 text-center text-4xl font-semibold capitalize md:text-6xl md:text-left">
                {title}
            </h2>
        </header>
    );
};

export default Header;