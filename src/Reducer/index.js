import { 
    GET_MOVIE,
    GET_MOVIE_BY_ID,
    GET_MOVIE_BY_NAME,
    FILTER_BY_POPULARITY,
} from '../Actions/constants'

const initialState = { 
    getAllMovies: [],
    allMovies: [],
    getMovieById: [],
    getMovieByName: [],
}


function rootReducer(state = initialState, action) {
    switch(action.type) {

        case GET_MOVIE:
            return { ...state, getAllMovies: action.payload, allMovies: action.payload }
            
        case GET_MOVIE_BY_ID:
            return { ...state, getMovieById: action.payload}

        case GET_MOVIE_BY_NAME:
            return {...state, getMovieByName: action.payload}

        case FILTER_BY_POPULARITY:
            const allMovies = state.allMovies
            const order = action.payload === 'Most popular' ? state.getAllMovies 
            : allMovies.sort((a, b) =>  a.vote_average - b.vote_average);     
            return { ...state, getAllMovies: [...order] };

        default: 
            return state;
    }
}


export default rootReducer;