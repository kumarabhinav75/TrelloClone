import React, { Component } from 'react';
import Card from '../Card/Card.component';
import './CardList.css'

class CardList extends Component {
    constructor(props){
        super(props);
    };

    renderCards(cards){
        return cards.map((card) => {
            return <Card card={card} />
        })
    }

    render(){
        const {list} = this.props;
        console.log('yooo');
        console.log(list.name,list.cards);
        return (
            <div className="list-container">
                <p className="list-name">{list.name}</p>
                {this.renderCards(list.cards)}
            </div>
        )
    }
}

export default CardList;