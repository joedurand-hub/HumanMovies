import { 
    GET_MOVIE,
    GET_MOVIE_BY_ID,
    GET_MOVIE_BY_NAME,
    FILTER_BY_AVERAGE0_2,
    FILTER_BY_AVERAGE2_4,
    FILTER_BY_AVERAGE4_6,
    FILTER_BY_AVERAGE6_8,
    FILTER_BY_AVERAGE8_10 
} from '../Actions/constants'

const initialState = { 
    getAllMovies: [],
    allMovies: [],
    getMovieById: [],
    getMovieByName: [],
    averageInStars: []
}


function rootReducer(state = initialState, action) {
    const getMoviesFiltered = state.getAllMovies
    const allMovies = state.allMovies
    switch(action.type) {

        case GET_MOVIE:
            return { ...state, getAllMovies: action.payload, allMovies: action.payload }
            
        case GET_MOVIE_BY_ID:
            return { ...state, getMovieById: action.payload}

        case GET_MOVIE_BY_NAME:
            return {...state, getMovieByName: action.payload}

        case FILTER_BY_AVERAGE0_2:
            const filterBy0_2 = allMovies.results?.map(movie => {
                return movie }).filter(movie => {
                return movie.vote_average > 0 && movie.vote_average < 2
            })
            getMoviesFiltered.results = filterBy0_2
            return {...state, averageInStars: [...filterBy0_2]}
        
        case FILTER_BY_AVERAGE2_4:
            const filterBy2_4 = allMovies.results?.map(movie => {
                return movie }).filter(movie => {
                return movie.vote_average > 2 && movie.vote_average < 4
            })
                getMoviesFiltered.results = filterBy2_4
                return {...state, averageInStars: [...filterBy2_4]}
        
        case FILTER_BY_AVERAGE4_6:
            const filterBy4_6 = allMovies.results?.map(movie => {
                return movie }).filter(movie => {
                return movie.vote_average > 4 && movie.vote_average < 6
            })
            getMoviesFiltered.results = filterBy4_6
            return {...state, averageInStars: [...filterBy4_6]}

        case FILTER_BY_AVERAGE6_8:
            const filterBy6_8 = allMovies.results?.map(movie => {
                return movie }).filter(movie => {
                return movie.vote_average > 6 && movie.vote_average < 8
            })
            getMoviesFiltered.results = filterBy6_8
            return {...state, averageInStars: [...filterBy6_8]}


        case FILTER_BY_AVERAGE8_10:
            const filterBy8_10 = allMovies.results?.map(movie => {
                return movie }).filter(movie => {
                return movie.vote_average > 8 && movie.vote_average < 10
            })
            getMoviesFiltered.results = filterBy8_10
            return {...state, averageInStars: [...filterBy8_10]}

        default: 
            return state;
    }
}


export default rootReducer;