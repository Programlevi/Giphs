export default (state = "", action) => {
    switch (action.type) {
        case 'FORM_INPUT':
            return action.payload;
        default:
            return state
    }
}