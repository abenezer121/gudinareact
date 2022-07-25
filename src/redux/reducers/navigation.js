const initialState = {
    navLocation : "INTRO"
}

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case  "INTRO":
            return Object.assign({}, state, {
                navLocation: "INTRO"
            })
        case 'HOME':
            return Object.assign({}, state, {
                navLocation : 'HOME'
            })
        case 'Ideology':
            return Object.assign({}, state, {
                navLocation : 'Ideology'
            })
        case 'RelationToOthers':
            return Object.assign({}, state, {
                navLocation : "RelationToOthers"
            })
        case 'Papers':
            return Object.assign({}, state, {
                navLocation : "Papers" 
            })
        case 'Archive':
            return Object.assign({}, state, {
                navLocation : "Archive"
            })
        case 'Gallery':
            return Object.assign({}, state, {
                navLocation : "Gallery"
            } )
        default:
            return state;
    }
}

export default navigationReducer;

