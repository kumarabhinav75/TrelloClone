import React, { Component } from 'react';
import CardList from '../CardList/CardList.component';
import './Board.css';


class Board extends Component {

    constructor(props){
        super(props);
    }

    renderBoard(cardData,listNames){
        return listNames.map((list,index) => {
            // console.log('-----This is for',list,'--------')
            const cards = cardData.reduce((listCards,currentCard) => {  
                // console.log(listCards);
                const copyArray = listCards;
                if(currentCard.listNo===index+1){
                    copyArray.push(currentCard);
                }
                return copyArray;
            },[]);
            return <CardList list={cards} listName={list} key={list} />
        });
        // const listNames = Object.keys(boardData);
        // return listNames.map((list) => {
        //     return <CardList list={boardData[list]} listName={list} key={list}/>
        // })
    }

    render() {
        const { cardData, listNames} = this.props;
        console.log(cardData,listNames);
        return (
            <div className="board-container">
                {this.renderBoard(cardData,listNames)}
                <div>
                    <input type="text" placeholder="Enter new list name..." className="list-input" />
                    <button className="newlist-button">New List</button>
                </div>
            </div>
        )
    }
}
  
export default Board;
  