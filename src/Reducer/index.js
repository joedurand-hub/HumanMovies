import { 
    GET_MOVIE,
    GET_MOVIE_BY_ID,
    GET_MOVIE_BY_NAME,
    FILTER_BY_AVERAGE,
} from '../Actions/constants'

const initialState = { 
    getAllMovies: [],
    allMovies: [],
    getMovieById: [],
    getMovieByName: [],
    averageInStars: []
}


function rootReducer(state = initialState, action) {
    switch(action.type) {

        case GET_MOVIE:
            return { ...state, getAllMovies: action.payload, allMovies: action.payload }
            
        case GET_MOVIE_BY_ID:
            return { ...state, getMovieById: action.payload}

        case GET_MOVIE_BY_NAME:
            return {...state, getMovieByName: action.payload}

        case FILTER_BY_AVERAGE:
            const getMovies = state.getAllMovies
            const allMovies = state.allMovies
            const order1_2 = action.payload === '9_10' ? getMovies : allMovies.results
            .sort((a, b) => {
                const average1 = a.vote_average
                const average2 = b.vote_average
                if(average1 <= 2 ) {
                    if(average2 < average1) return -1
                    if(average1 < average2) return 1
                    else {
                        return 0
                    }    
                }   

            })
            return { ...state, getMovies: [...order1_2] };

        default: 
            return state;
    }
}


export default rootReducer;