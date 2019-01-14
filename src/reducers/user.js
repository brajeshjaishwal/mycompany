import globals from '../constants/constants'

let initialState = {
    users: [
        {
            "id": 1,
            "name": "Sayli Patel ",
            "img": "https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg",
            "jobTitle": "Web Developer",
            "email": "sayalipatel1987@redifmail.com",
            "address": {
                "street": "62977 Giovanni Track",
                "city": "New Carmelomouth",
                "country": "Colombia",
                "zipcode": "46974"
            }
        },
        {
            "id": 2,
            "name": "Joy Farnadis",
            "img": "https://s3.amazonaws.com/uifaces/faces/twitter/ritu/128.jpg",
            "jobTitle": "Web Designer",
            "email": "joyfarnadis@redifmail.com",
            "address": {
                "street": "62977 Giovanni Track",
                "city": "New Carmelomouth",
                "country": "Colombia",
                "zipcode": "46974"
            }
        },
        {
            "id": 3,
            "name": "Rushi Chand",
            "img": "https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg",
            "jobTitle": "UI/UX Designer",
            "email": "rushi.chand@redifmail.com",
            "address": {
                "street": "62977 Giovanni Track",
                "city": "New Carmelomouth",
                "country": "Colombia",
                "zipcode": "46974"
            }
        },
        {
            "id": 4,
            "name": "Bradford Kyen",
            "img": "https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg",
            "jobTitle": "Web Developer",
            "email": "bradford.keyn@redifmail.com",
            "address": {
                "street": "62977 Giovanni Track",
                "city": "New Carmelomouth",
                "country": "Colombia",
                "zipcode": "46974"
            }
        }
    ],
    loading: false,
    error: '',
    errorMessage: ''
};

export const user = (state = initialState, action) => {
    switch(action.type) {
        case globals.FETCHUSERS:
        case globals.FETCHUSERS_SUCCEDED:
        case globals.FETCHUSERS_FAILED:
            return { ...state, ...action.payload }
        default:
            return { ...state}
    }
}