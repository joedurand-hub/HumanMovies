import axios from 'axios';
import { URL,
         QUERY,  
         API_KEY, 
         GET_MOVIE, 
         GET_MOVIE_BY_ID, 
         GET_MOVIE_BY_NAME, 
         FILTER_BY_AVERAGE0_2,
         FILTER_BY_AVERAGE2_4,
         FILTER_BY_AVERAGE4_6,
         FILTER_BY_AVERAGE6_8,
         FILTER_BY_AVERAGE8_10 } from './constants'


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

export function filterByAverage0_2() {
   return async function(dispatch) {
        try {
         return dispatch({type: FILTER_BY_AVERAGE0_2})
        } catch(error) {
           console.log(error)
        }
   }
}

export function filterByAverage2_4() {
   return async function(dispatch) {
        try {
         return dispatch({type: FILTER_BY_AVERAGE2_4})
        } catch(error) {
           console.log(error)
        }
   }
}

export function filterByAverage4_6() {
   return async function(dispatch) {
        try {
         return dispatch({type: FILTER_BY_AVERAGE4_6})
        } catch(error) {
           console.log(error)
        }
   }
}

export function filterByAverage6_8() {
   return async function(dispatch) {
        try {
         return dispatch({type: FILTER_BY_AVERAGE6_8})
        } catch(error) {
           console.log(error)
        }
   }
}

export function filterByAverage8_10() {
   return async function(dispatch) {
        try {
         return dispatch({type: FILTER_BY_AVERAGE8_10})
        } catch(error) {
           console.log(error)
        }
   }
}


