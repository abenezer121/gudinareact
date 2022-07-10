const initialState = ({
    author :   "All"
})

const authorReducer = (state = initialState, action) => { 
    switch (action.type) {
        case 'AUTHOR':
            return Object.assign({}, state, {
                author : action.payload.authorName
            })
        default:
            return state;
    }
}

export default authorReducer