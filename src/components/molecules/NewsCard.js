import React from 'react';
import { BiAddToQueue } from 'react-icons/bi'

const NewsCard = ({ title, externalUrl }) => {
    return (
        <div className="w-full flex border border-gray-400 bg-white rounded">
            <div className="p-4 hover:bg-gray-200 flex-grow">
                <a href={externalUrl} rel="noopener noreferrer" target="_blank">
                    <div className="text-gray-700 font-bold text-lg">{title}</div>
                </a>
            </div>
            <div
                className="flex items-center justify-center p-2 border-l border-gray-400 cursor-pointer hover:bg-gray-200"
            >
               <BiAddToQueue />
            </div>
        </div>
    );
};

export default NewsCard;