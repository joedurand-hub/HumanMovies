import axios from 'axios';

export const GET_MOVIE = "GET_MOVIE";

export function getMovies() {
    return async function(dispatch) {
         try {
           const response = await axios.get(`http://localhost:3001/dogs/`)
            return dispatch({type: GET_MOVIE, payload: response.data})

         } catch(error) {
            console.log(error)
         }
    }
}

