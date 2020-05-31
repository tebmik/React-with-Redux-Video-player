import { FETCH_MEDIA } from "../actions/types";

export const mediaReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_MEDIA:
            return {
                ...state,
                media: action.payload
            }
        default: 
            return state;
    }
};

