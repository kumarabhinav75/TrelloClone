import React, { Component } from 'react';
import Card from '../Card/Card.component';
import './CardList.css'

class CardList extends Component {
    constructor(props){
        super(props);
        this.cardInput = React.createRef();
        // this.handleCardDragStart = this.handleCardDragStart.bind(this);
        this.handleNewCardClick = this.handleNewCardClick.bind(this);
        this.state = {
            fromList: -1,
            cardIndex: -1,
            cardCount: -1
        }
    };

    renderCards(cards){
        return cards.map((card,index) => {
            return <Card 
                        card={card} 
                        index={index} 
                        key={index} 
                        handleCardDragStart={this.handleCardDragStart}
                        handleDragEnd={this.handleDragEnd}
                        />
        })
    }

    shouldComponentUpdate(nextProps){
        return nextProps.list.length != this.props.list.length
    }

    // handleDragEnd(){
    //     // this.props.updateCard(this.state.cardIndex,this.state.fromList)
    // }

    // handleCardDragStart (data,e){
    //     console.log('data to save',data);
    //     e.dataTransfer.setData("text/plain", JSON.stringify(data));
    // }

    handleNewCardClick(listNumber){
        this.props.handleNewCard(listNumber,this.cardInput.current.value);
        this.cardInput.current.value = '';
    }

    render(){
        const {
                list, 
                listName, 
                listNumber,
                // handleOnDrop,
                // handleOnDragOver,
            } = this.props;

        return (
            <div className="list-container" 
                >
                <p className="list-name">{listName}</p>
                {this.renderCards(list)}
                <div className="new-card">
                    <input type="text" ref={this.cardInput}></input>
                    <button onClick={() => this.handleNewCardClick(listNumber)}>Add card</button>
                </div>
            </div>
        )
    }
}

export default CardList;