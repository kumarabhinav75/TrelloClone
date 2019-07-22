const initialState = [{"id": 1,"text":"start working","listNo":1},{"id":2,"text":"start css","listNo":1},{"id":3,"text":"start html","listNo":2}];

export const cards = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return [
                ...state,
                action.payload
            ];
        case 'UPDATE_LIST_NUMBER': {
            const stateCopy = state;
            const cardDeleted = stateCopy.splice(action.cardIndex,1);
            return [
                ...stateCopy,
                {
                    "text": cardDeleted.text,
                    "listNo": action.listNumber
                }
            ]
        }
        default: return state;
    }
}
