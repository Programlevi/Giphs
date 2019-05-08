const INITIAL_STATE = {
    giphs: [],
    favorites: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_TRENDING':
            return { ...state, giphs: action.payload };
        case 'FETCH_SEARCH':
            return { ...state, giphs: action.payload };
        case 'ADD_FAVORITE':
            state.favorites.push(action.payload)
            state.favorites = [...new Set(state.favorites)]
            return { ...state }
        default:
            return state;
    }
}