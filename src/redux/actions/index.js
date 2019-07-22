export const addList = listName => ({
    type: 'ADD_LIST',
    listName
});

export const addCard = (payload) => ({
    type: 'ADD_CARD',
    payload
})

export const updateCardList = (cardIndex,listNumber) => ({
    type: 'UPDATE_LIST_NUMBER',
    cardIndex,
    listNumber
})