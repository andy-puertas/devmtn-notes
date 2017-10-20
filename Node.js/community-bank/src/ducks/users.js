import axios from 'axios';

const initialState = {
    user: {}
};

// store the method here so we can use it multiple places 
// if we const our variables like this, it will throw an error if we mistype anywhere else
const GET_USER = 'GET_USER';

// all axios requests return an /object/
export function getUser() {
    // what data are we retrieving? where do we want it to go?
    const user = axios.get('/auth/user')
    .then(res => {
        return res.data
    });
    return {
        type: GET_USER,
        payload: user
    }
};

// FULFILLED!
// helps ensure the Middleware executes as expected 
// a '_PENDING' case could be added if you'd like 
export default function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})

        default:
            return state;
    }
};