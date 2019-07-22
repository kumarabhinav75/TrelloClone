import React, { Component } from 'react';
import CardList from '../CardList/CardList.component';
import './Board.css';


class Board extends Component {

    constructor(props){
        super(props);
        this.nameInput = React.createRef();
        this.handleNewList = this.handleNewList.bind(this);
        this.handleNewCard = this.handleNewCard.bind(this);
        // this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
        // this.handleOnDragOver = this.handleOnDragOver.bind(this);
        this.state = {
            cardCount:0,
        }
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
            return <CardList 
                        list={cards}
                        listNumber={index+1} 
                        listName={list} key={index+1} 
                        handleNewCard={this.handleNewCard} //action
                        updateCard={this.props.updateCardList} //action
                        // handleOnDragEnd={this.handleOnDragEnd}
                        // handleOnDragOver={this.handleOnDragOver}
                        />
        });
    }

    handleNewList(){
        this.props.addList(this.nameInput.current.value);
        this.nameInput.current.value='';
    }

    handleNewCard(listNumber, cardText){
        const count = this.state.cardCount;
        this.setState({
            "cardCount": count+1
        },() => {
            const payload = {
                "id": this.state.cardCount,
                "text": cardText,
                "listNo": listNumber
            }
            this.props.addCard(payload);
        });
    }

    // handleOnDragEnd(listNumber,e){
    //     const data = JSON.parse(e.dataTransfer.getData("text"));
    //     const {index, listNo} = data;
    //     console.log('newnew',data);
    //     if(listNumber!==listNo){
    //         console.log('yesyes');
    //         // this.setState({
    //         //     fromList: listNo,
    //         //     cardIndex: index
    //         // })
    //     }
    // }


    // handleOnDragOver (e){
    //     e.preventDefault();
    // }



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
  