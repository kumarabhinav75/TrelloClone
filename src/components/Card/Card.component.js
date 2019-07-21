import React, {Component} from 'react';
import './Card.css'

class Card extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {card,handleCardDragStart} = this.props;
        return (
            <div 
                className="card" 
                draggable
                onDragStart={(e) => handleCardDragStart(e.target)}
            >
                <p>{card}</p>
            </div>
        )
    }
}

export default Card;