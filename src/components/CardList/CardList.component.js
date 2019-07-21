import React, { Component } from 'react';
import Card from '../Card/Card.component';
import './CardList.css'

class CardList extends Component {
    constructor(props){
        super(props);
    };

    renderCards(cards){
        // console.log(cards);
        return cards.map((card,index) => {
            return <Card card={card.text} key={index} />
        })
    }

    render(){
        const {list, listName} = this.props;
        // console.log('yooo');
        console.log(list,listName);
        return (
            <div className="list-container">
                <p className="list-name">{listName}</p>
                {this.renderCards(list)}
                <div className="new-card">
                    <input type="text"></input>
                    <button>Add card</button>
                </div>
            </div>
        )
    }
}

export default CardList;