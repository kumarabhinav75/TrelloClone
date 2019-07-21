import React, { Component } from 'react';
import Card from '../Card/Card.component';
import './CardList.css'

class CardList extends Component {
    constructor(props){
        super(props);
        this.cardInput = React.createRef();
        this.handleNewCard = this.handleNewCard.bind(this);
    };

    renderCards(cards){
        return cards.map((card,index) => {
            return <Card card={card.text} key={index} handleCardDragStart={this.handleCardDragStart}/>
        })
    }

    handleNewCard(listNumber){
        const payload = {
            "text": this.cardInput.current.value,
            "listNo": listNumber
        }
        this.cardInput.current.value='';
        this.props.addCard(payload);
    }

    shouldComponentUpdate(nextProps){
        return nextProps.list.length != this.props.list.length
    }

    handleOnDragOver(listNumber){
        console.log(listNumber)
    }

    handleCardDragStart(card){
        console.log('card',card);
    }

    render(){
        const {list, listName, listNumber} = this.props;
        console.log(listNumber, 're-rendered!!!');
        return (
            <div className="droppable list-container" onDragOver={()=>this.handleOnDragOver(listNumber)} >
                <p className="list-name">{listName}</p>
                {this.renderCards(list)}
                <div className="new-card">
                    <input type="text" ref={this.cardInput}></input>
                    <button onClick={(key) => this.handleNewCard(listNumber)}>Add card</button>
                </div>
            </div>
        )
    }
}

export default CardList;