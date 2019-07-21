export const cards = (state = [{"text":"start working","listNo":1},{"text":"start css","listNo":1},{"text":"start html","listNo":2}], action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return [
                ...state,
                action.payload
            ];
        default: return state;
    }
}
