import React from 'react';
import {useForLaterList} from "../../store/context/ForLaterContext";

const ForLaterList = () => {
    const { store } = useForLaterList();
    return (
        <div className="col-span-1 p-6 md:col-span-2">
            <h1 className="text-lg text-center font-bold border-b border-gray-400">For later</h1>
            {store.map(article => <div key={article.title}>{article.title}</div>)}
        </div>
    );
};

export default ForLaterList;