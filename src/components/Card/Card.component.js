import React, {Component} from 'react';
import './Card.css'

class Card extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {card} = this.props;
        return (
            <div className="card" draggable>
                <p>{card}</p>
            </div>
        )
    }
}

export default Card;