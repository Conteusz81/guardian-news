import React from 'react';
import { useForLaterList } from "../../store/context/ForLaterContext";
import ForLaterCard from "../molecules/ForLaterCard";

const ForLaterList = () => {
    const { store } = useForLaterList();
    console.log(store);
    return (
        <div className="col-span-1 p-6 md:col-span-2">
            <h1 className="mb-4 text-lg text-center font-bold border-b border-gray-400">For later</h1>
            {
                store.map(article => <ForLaterCard
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        externalUrl={article.externalUrl}
                        section={article.section}
                />
                )}
        </div>
    );
};

export default ForLaterList;