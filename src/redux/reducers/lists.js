export const lists = (state = ["To do","In progress"], action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return [
                ...state,
                action.listName
            ];       
        default: return state;         
    }
}

