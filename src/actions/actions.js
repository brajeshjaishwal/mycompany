import constants from '../constants/constants'
//import { proxy, handleError } from '../api/api'

const { FETCHUSERS } = constants

export const fetchUsersAction = function () {
    return {
        type: FETCHUSERS,
        payload: { }
    }
}