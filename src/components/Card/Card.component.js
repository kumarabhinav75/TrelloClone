import React, {Component} from 'react';

class Card extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {card} = this.props;
        console.log(card);
    }
}

export default Card;