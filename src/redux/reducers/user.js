const initialState = {
    usertype : "Visitor"
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case  "Admin":
            return Object.assign({}, state, {
                usertype: "Admin"
            })
        case  "Visitor":
            return Object.assign({}, state, {
                usertype: "Visitor"
            })
    
        default:
            return state;
    }
}

export default userReducer;

