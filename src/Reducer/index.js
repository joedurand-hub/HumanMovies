import { 
    GET_MOVIE
} from '../Actions/index'

const initialState = { 
    getAllMovies: [],       
}


function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_MOVIE:
            return { ...state, searchDog: action.payload, allDogs: action.payload }
        default: 
            return state;
    }
}


export default rootReducer;