export const GET_LOGIN = 'GET_LOGIN';

export function getLogin(login){
    return {
        type: GET_LOGIN,
        payload: login
    }
}