const initialState = {
    idiology: {
        title: "",
        quote: [],
        text : ""
    }
}

const idiologyReducer = (state = initialState, action) => { 
    switch (action.type) {
        case 'Idiology':
            return Object.assign({}, state, {
                idiology : action.payload.data
            })
        default:
            return state;
    }
}

export default idiologyReducer