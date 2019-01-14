import constants from '../constants/constants'
//import { proxy, handleError } from '../api/api'

const { FETCHUSERS, SEARCHUSERS } = constants

export const fetchUsersAction = function () {
    return {
        type: FETCHUSERS,
        payload: { }
    }
}

export const searchUsersAction = function (searchString) {
    return {
        type: SEARCHUSERS,
        payload: { searchString }
    }
}