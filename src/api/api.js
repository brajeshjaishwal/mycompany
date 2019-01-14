import axios from 'axios'

export const proxy = axios.create({
    //baseURL: '//serveraddress'
})

export function getConfig() {
    return { headers: {'auth': sessionStorage.getItem('token') } }
}