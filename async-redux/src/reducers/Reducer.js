import {FETCH_ANIME_START, FETCH_ANIME_SUCCESS, FETCH_ANIME_FAIL} from '../actions/Action';

const initalState = {
    anime: [],
    error: '',
    isFetching: false
}


function reducer(state = initalState, action){
    switch(action.type){
        case FETCH_ANIME_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_ANIME_SUCCESS: 
            return { 
                ...state,
                anime: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_ANIME_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;