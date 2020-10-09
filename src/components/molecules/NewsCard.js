import React from 'react';
import moment from "moment";
import { BiAddToQueue } from 'react-icons/bi'
import {useForLaterList} from "../../store/context/ForLaterContext";

const NewsCard = ({ id, title, externalUrl, section, createdAt }) => {
    const { dispatch } = useForLaterList();

    const addToForLaterList = () => {
        const payload = {
            id,
            section,
            externalUrl,
            title
        }
        dispatch({ type: "ADD_ARTICLE", payload})
    }

    return (
        <div className="w-full flex border border-gray-400 bg-white rounded">
            <div className="p-4 hover:bg-gray-200 flex-grow">
                <a href={externalUrl} rel="noopener noreferrer" target="_blank">
                    <div className="mb-4 text-gray-700 font-bold text-lg">{title}</div>
                </a>
                <div>
                    Published {moment(createdAt).from(moment())}
                </div>
            </div>
            <div
                className="flex items-center justify-center p-2 border-l border-gray-400 cursor-pointer hover:bg-gray-200"
                onClick={addToForLaterList}
            >
               <BiAddToQueue />
            </div>
        </div>
    );
};

export default NewsCard;