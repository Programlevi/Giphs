import giphy from '../api/giphy'

export const getTrending = () => {
    return async dispatch => {
        const response = await giphy.get("/trending");
        dispatch({
            type: 'FETCH_TRENDING',
            payload: response.data.data
        });
    }
}

export const getSearch = (search) => {
    return async dispatch => {
        const response = await giphy.get("/search", {
            params:{
                q: search
            }
        })

        console.log(response.data.data)

        dispatch({
            type: 'FETCH_SEARCH',
            payload: response.data.data
        })
    }
}

export const fetchInput = (text) => {
    return {
        type: 'FORM_INPUT',
        payload: text
    }
}

export const addFavorite = (image) => {
    return{
        type: 'ADD_FAVORITE',
        payload: image
    }
}