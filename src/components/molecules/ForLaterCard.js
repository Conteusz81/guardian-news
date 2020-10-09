import React from 'react';
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { useForLaterList } from "../../store/context/ForLaterContext";

const ForLaterCard = ({ id, title, externalUrl, section }) => {
    const { dispatch } = useForLaterList();

    const removeFromForLaterList = () => {
        dispatch({ type: "REMOVE_ARTICLE", id});
    }

    return (
        <div className="w-full mb-2  flex border border-gray-400 bg-gray-100 rounded ">
            <div className="flex flex-col flex-grow py-1 px-2 hover:bg-white">
                <a href={externalUrl} rel="noopener noreferrer" target="_blank">
                    <h5 className="capitalize text-xs">{section}</h5>
                    <div className="mt-2 text-gray-600 text-sm">{title}</div>
                </a>
            </div>
            <div
                className="flex items-center justify-center p-2 border-l border-gray-400 cursor-pointer hover:bg-white"
                onClick={removeFromForLaterList}
            >
                <IoMdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default ForLaterCard;