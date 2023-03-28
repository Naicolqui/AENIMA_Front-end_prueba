import axios from 'axios';
export const GET_CARDS = 'GET_CARDS';

export function getCards() {
    return async function (dispatch) {
            let json = await axios.get('../json/cardsInfo.json', {})
            return dispatch({
                type: GET_CARDS,
                payload: json.data
            })
    }
}