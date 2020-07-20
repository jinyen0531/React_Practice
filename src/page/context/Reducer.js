const initialState = {
    title: 'no'
}

const reducer = (state, action) => {
    switch (action.type) {
        case "reset": 
            return initialState
        case "get":
            return {...state, title: action.title}
        default:
            return initialState
    }

}

export { initialState, reducer }
