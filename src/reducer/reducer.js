import { FETCH_DATA_SUCCESSFUL,FETCH_DATA_FAILED, SEARCH_DATA_SUCCESS, SEARCH_DATA_FAILED, VIEW_MOVIE_DETAILS_SUCCESS, VIEW_MOVIE_DETAILS_FAILED } from "../action/Type"

const initialState = {
    movies: [],
    search_movies: [],
    select_movie: {},
    fetching_vd: true,
    query: "",
}

export const movie_reducer = (state=initialState, action) => {
    const {payload, type, query} = action
    
    switch (type) {
        case FETCH_DATA_SUCCESSFUL:
            return {
                ...state,
                movies: payload,
            }
        
        case SEARCH_DATA_SUCCESS:
            return {
                ...state,
                search_movies: payload,
                query: query
            }

        case VIEW_MOVIE_DETAILS_SUCCESS:
            return {
                ...state,
                select_movie: payload,
            }

        case VIEW_MOVIE_DETAILS_FAILED:
        case SEARCH_DATA_FAILED:
        case FETCH_DATA_FAILED:
            return {
                ...state
            }

        default:
            return {
                ...state,
            }
    }
}

