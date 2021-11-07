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
            
            const filterBy6_8 = allMovies.results?.map(movie => {
                return movie
            }).filter(movie => {
                return movie.vote_average > 6 && movie.vote_average < 8
            })
            // const filterBy2_4 = allMovies.results?.map(movie => {
            //     return movie
            // }).filter(movie => {
            //     return movie.vote_average > 2 && movie.vote_average < 4
            // })
            console.log("filterBy6_8", filterBy6_8)
            return {...state, getAllMovies: [...filterBy6_8]}

        default: 
            return state;
    }
}


export default rootReducer;