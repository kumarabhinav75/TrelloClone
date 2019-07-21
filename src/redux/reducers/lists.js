export const lists = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return [
                ...state,
                action.listName
            ];       
        default: return state;         
    }
}

