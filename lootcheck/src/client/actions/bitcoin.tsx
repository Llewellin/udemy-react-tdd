// import * as constants from './constants';
const {FETCH_BITCOIN} = require('./constants');

export const fetchBitcoin = () => {
    return dispatch => {
        return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(json => {
                dispatch({type: FETCH_BITCOIN, bitcoin: json});
            });
    };
};
