import axios from 'axios';
import { URL,
         QUERY,  
         API_KEY, 
         GET_MOVIE, 
         GET_MOVIE_BY_ID, 
         GET_MOVIE_BY_NAME, 
         FILTER_BY_AVERAGE, } from './constants'


export function getMovies() {
    return async function(dispatch) {
         try {
           const response = await axios.get(`${URL}discover/movie${QUERY}${API_KEY}&sort_by=popularity.desc`)
            return dispatch({type: GET_MOVIE, payload: response.data})

         } catch(error) {
            console.log(error)
         }
    }
}  

export function getMoviebyId(id) {
   return async function(dispatch) {
        try {
          const response = await axios.get(`${URL}movie/${id}${QUERY}${API_KEY}`)
           return dispatch({type: GET_MOVIE_BY_ID, payload: response.data})

        } catch(error) {
           console.log(error)
        }
   }
}

export function searchMovieByName(name) {
   return async function(dispatch) {
        try {
          const response = await axios.get(`${URL}search/movie${QUERY}${API_KEY}&query=${name}`)
           return dispatch({type: GET_MOVIE_BY_NAME, payload: response.data})

        } catch(error) {
           console.log(error)
        }
   }
}

export function filterByAverage() {
   return async function(dispatch) {
        try {
         return dispatch({type: FILTER_BY_AVERAGE})
        } catch(error) {
           console.log(error)
        }
   }
}
