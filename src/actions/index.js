import { FETCH_MEDIA } from "./types"
import { KEY } from "../config/config";
import youtubeApi from "../api/youtubeApi";

export const fetchMedia = () => async dispatch => {
    try {
        const response = await youtubeApi.get("/search", {
            params: {
                part: "snippet",
                maxResult: 1,
                key: KEY
            }
        });
        dispatch({ type: FETCH_MEDIA, payload: response.data });
    } catch(err) {
        console.log("something went wrong")
    }
};