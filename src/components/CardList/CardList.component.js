import React, { Component } from 'react';
import Card from '../Card/Card.component';

class CardList extends Component {
    constructor(props){
        super(props);
    };

    renderCards(cards){
        return cards.map((card) => {
            <Card card={card} />
        })
    }

    render(){
        const {list} = this.props;
        console.log('yooo');
        console.log(list.name,list.cards);
        return (this.renderCards(list.cards))
    }
}

export default CardList;