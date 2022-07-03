const initialState = {
    navLocation : "HOME"
}

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HOME':
            return Object.assign({}, state, {
                navLocation : 'HOME'
            })
        case 'ARTICLE':
            return Object.assign({}, state, {
                navLocation : 'ARTICLE'
            })
        case 'BOOK':
            return Object.assign({}, state, {
                navLocation : "BOOK"
            })
        case 'QUESTION':
            return Object.assign({}, state, {
                navLocation : "QUESTION" 
            })
        case 'ABOUT':
            return Object.assign({}, state, {
                navLocation : "ABOUT"
            })
        case 'DONATION':
            return Object.assign({}, state, {
                navLocation : "DONATION"
            } )
        default:
            return state;
    }
}

export default navigationReducer;

