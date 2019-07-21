export const addList = listName => ({
    type: 'ADD_LIST',
    listName
});

export const addCard = (payload) => ({
    type: 'ADD_CARD',
    payload: {
        cardText,
        listNo
    }
})
