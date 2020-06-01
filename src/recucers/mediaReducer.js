import { FETCH_MEDIA } from "../actions/types";

export const mediaReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_MEDIA:
            return action.payload
        default: 
            return state;
    }
};

