import React from 'react';

const ForLaterCard = ({ id, title, externalUrl, section }) => {
    return (
        <div className="w-full mb-2 flex border border-gray-400 bg-gray-100 rounded">
            <div className="p-2 hover:bg-white">
                <a href={externalUrl} rel="noopener noreferrer" target="_blank">
                    <div className="text-gray-600 text-sm">{title}</div>
                </a>
            </div>
        </div>
    );
};

export default ForLaterCard;