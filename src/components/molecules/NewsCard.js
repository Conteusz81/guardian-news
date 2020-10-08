import React from 'react';

const NewsCard = ({ title, externalUrl }) => {
    return (
        <div className="w-full">
            <div className="border border-gray-400 bg-white rounded p-4 flex leading-normal">
                <a href={externalUrl} rel="noopener noreferrer" target="_blank">
                    <div className="text-gray-700 font-bold text-lg">{title}</div>
                </a>
            </div>
        </div>
    );
};

export default NewsCard;