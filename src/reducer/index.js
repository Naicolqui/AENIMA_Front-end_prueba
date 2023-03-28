import { GET_CARDS } from "../actions";

let initialState = {
    cardsInfo: []
};

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_CARDS:
            return {
                ...state,
                cardsInfo: action.payload
            };

        default:
            return state;
    }
}