import React from 'react';

const MainTemplate = ({ children }) => {
    return (
        <div className="px-8 py-4 bg-gray-100 md:col-span-5 md:px-16 md:px-8">
            { children }
        </div>
    );
};

export default MainTemplate;