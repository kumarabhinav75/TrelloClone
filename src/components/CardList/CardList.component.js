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
            return <Card card={card.text} key={index} />
        })
    }

    handleNewCard(key){
        const payload = {
            "text": this.cardInput.current.value,
            "listNo": this.props.listNumber
        }
        this.cardInput.current.value='';
        this.props.addCard(payload);
    }

    shouldComponentUpdate(nextProps){
        return nextProps.list.length != this.props.list.length
    }

    render(){
        const {list, listName} = this.props;
        console.log(listName, 're-rendered!!!');
        return (
            <div className="list-container">
                <p className="list-name">{listName}</p>
                {this.renderCards(list)}
                <div className="new-card">
                    <input type="text" ref={this.cardInput}></input>
                    <button onClick={(key) => this.handleNewCard(key)}>Add card</button>
                </div>
            </div>
        )
    }
}

export default CardList;