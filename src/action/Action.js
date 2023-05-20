import { FETCH_DATA_SUCCESSFUL, FETCH_DATA_FAILED, SEARCH_DATA_SUCCESS, SEARCH_DATA_FAILED, VIEW_MOVIE_DETAILS_SUCCESS, VIEW_MOVIE_DETAILS_FAILED } from "./Type";
import axios from "axios";

// This action is to get the latest data from Api
export const get_data = (page) => async dispatch => {
    try{

        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c3045cd7474e23e62141844203a89916&language=en-US&page=${page}` )
        
        const tempArr = []

        for(let i =1; i < response.data.results.length; i++){
            tempArr.push(response.data.results[i])
        }

        dispatch({
            type: FETCH_DATA_SUCCESSFUL,
            payload: tempArr
        })

    }catch(err){
        dispatch({
            type: FETCH_DATA_FAILED
        })
    }
}

// This function is to get the searched movie from Api
// query value will be come from Searchbar component
export const search_data = (query, page) => async dispatch => {

    try {
        
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c3045cd7474e23e62141844203a89916&language=en-US&page=${page}&include_adult=true&query=${query}&video=false`)

        const tempArr = []

        for(let i =1; i < response.data.results.length; i++){
            tempArr.push(response.data.results[i]) 
        }

        dispatch({
            type: SEARCH_DATA_SUCCESS,
            payload: tempArr,
            query: query
        })

    } catch (error) {
        dispatch({
            type: SEARCH_DATA_FAILED,
        })
    }
}

// This action is to get the movie detail and adv video from api
export const selecting_movie = (movie) => async dispatch => {

    try {

        const id = movie ? movie.id : 411
        
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c3045cd7474e23e62141844203a89916&language=en-US`)

        console.log(id)
        movie.get_mv = response.data.results[0]

        dispatch({
            type: VIEW_MOVIE_DETAILS_SUCCESS,
            payload: movie,
        })

    } catch (error) {
        dispatch({
            type: VIEW_MOVIE_DETAILS_FAILED
        })
    }

}