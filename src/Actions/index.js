import axios from 'axios';

export const GET_MOVIE = "GET_MOVIE";
export const GET_MOVIE_BY_ID = "GET_MOVIE_BY_ID"
export const FILTER_BY_POPULARITY = "FILTER_BY_POPULARITY";

export function getMovies() {
    return async function(dispatch) {
         try {
           const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=aa0526c566a1bb6b23e2e2d2eea4c4ce`)
            return dispatch({type: GET_MOVIE, payload: response.data})

         } catch(error) {
            console.log(error)
         }
    }
}

export function getMoviebyId(id) {
   return async function(dispatch) {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=aa0526c566a1bb6b23e2e2d2eea4c4ce`)
           return dispatch({type: GET_MOVIE_BY_ID, payload: response.data})

        } catch(error) {
           console.log(error)
        }
   }
}

export const filterByPopularity = (sort) => (dispatch) => {  
   dispatch({
       type: sort,        
     })    
 };

export function searchByName() {
   return async function(dispatch) {
        try {
          const response = await axios.get(`http://localhost:3001/dogs/`)
           return dispatch({type: GET_MOVIE, payload: response.data})

        } catch(error) {
           console.log(error)
        }
   }
}
