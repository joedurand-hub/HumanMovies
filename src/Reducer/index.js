import { 
    GET_MOVIE,
    FILTER_BY_POPULARITY,
    GET_MOVIE_BY_ID,
} from '../Actions/index'

const initialState = { 
    getAllMovies: [],
    allMovies: [],
    getMovieById: [],
}


function rootReducer(state = initialState, action) {
    switch(action.type) {

        case GET_MOVIE:
            return { ...state, getAllMovies: action.payload, allMovies: action.payload }
            
        case GET_MOVIE_BY_ID:
            return { ...state, getMovieById: action.payload}

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