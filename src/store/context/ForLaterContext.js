import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { forLaterListReducer } from "../reducers/ForLaterReducer";

const ForLaterContext = createContext(undefined);

const ForLaterProvider = ({ children }) => {
    const [store, dispatch] = useReducer(forLaterListReducer, [], () => {
        const localData = localStorage.getItem("ForLaterList");
        return localData ? JSON.parse(localData) : [];
    });

    const value = {
        store,
        dispatch
    }

    useEffect(() => {
        localStorage.setItem("ForLaterList", JSON.stringify(store));
    }, [store]);

    return (
        <ForLaterContext.Provider value={value}>
            { children }
        </ForLaterContext.Provider>
    );
};

const useForLaterList = () => {
    const context = useContext(ForLaterContext);
    if (context === undefined) {
        throw new Error('useForLaterList must be used within a Provider');
    }

    return context;
}

export { ForLaterProvider, useForLaterList };