import { FETCH_MEDIA } from "./types"

export const fetchMedia = () => async dispatch => {
    const response = await youtubeApi.get("/search")
    dispatch({ type: FETCH_MEDIA, payload: response });
};