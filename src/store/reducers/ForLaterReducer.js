import { articleExists } from "../../utils/parsers";

const initialState = [];

export const forLaterListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ARTICLE": {
            if(articleExists(state, action.payload)) {
                return state;
            } else {
                return [...state, action.payload];
            }
        }
        case "REMOVE_ARTICLE": {
            return state.filter(article => article.id !== action.id);
        }
        default: return state;
    }
};