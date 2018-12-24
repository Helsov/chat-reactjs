import {GET_LOGIN} from './action';

export function reducer(state, action) {
    switch (action.type) {
        case GET_LOGIN:
            return {
                ...state,
                login: action.payload
            };
        default:
            return state;
    }
}

export const initialState = {
    login: window.localStorage.login
};