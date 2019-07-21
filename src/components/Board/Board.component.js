import React, { Component } from 'react';
import CardList from '../CardList/CardList.component';
import './Board.css';


class Board extends Component {

    constructor(props){
        super(props);
        this.nameInput = React.createRef();
        this.handleNewList = this.handleNewList.bind(this);
    }

    renderBoard(cardData,listNames){
        return listNames.map((list,index) => {
            const cards = cardData.reduce((listCards,currentCard) => {  
                const copyArray = listCards;
                if(currentCard.listNo===index+1){
                    copyArray.push(currentCard);
                }
                return copyArray;
            },[]);
            return <CardList list={cards} listNumber={index+1} listName={list} key={index+1} addCard={this.props.addCard}/>
        });
    }

    handleNewList(){
        this.props.addList(this.nameInput.current.value);
        this.nameInput.current.value='';
    }

    render() {
        const { cardData, listNames} = this.props;
        console.log('PROPS:',this.props);
        return (
            <div className="board-container">
                {listNames&&this.renderBoard(cardData,listNames)}
                <div>
                    <input type="text" placeholder="Enter new list name..." className="list-input" ref={this.nameInput}/>
                    <button className="newlist-button" onClick={() => this.handleNewList()}>New List</button>
                </div>
            </div>
        )
    }
}
  
export default Board;
  