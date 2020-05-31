import { FETCH_MEDIA } from "./types"
import { KEY } from "../config/config";

export const fetchMedia = () => async dispatch => {
    const response = await youtubeApi.get("/search", {
        params: {
            part: "snippet",
            maxResult: 5,
            key: KEY
        }
    })
    dispatch({ type: FETCH_MEDIA, payload: response });
};