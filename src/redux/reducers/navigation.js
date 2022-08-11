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
            })
        case 'AdminArchive':
            return Object.assign({}, state, {
                        navLocation : "AdminArchive" 
                    })
        case 'AdminHome':
            return Object.assign({}, state, {
                        navLocation : "AdminHome" 
                    })
        case 'AdminLogin':
            return Object.assign({}, state, {
                        navLocation : "AdminLogin" 
                    })
        case 'AdminBlog':
            return Object.assign({}, state, {
                        navLocation : "AdminBlog" 
                    })
        case 'AdminPaper':
            return Object.assign({}, state, {
                        navLocation : "AdminPaper" 
                    })
        default:
            return state;
    }
}

export default navigationReducer;

