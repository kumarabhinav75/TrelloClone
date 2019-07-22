import React, {Component} from 'react';
import './Card.css'

class Card extends Component {
    constructor(props){
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this);
        this.state = {
            cardText : '',
        }
    }

    handleCardClick(e){
        console.log(e.target.innerHTML)
    }

    render(){
        const {
                card,
                // handleCardDragStart,
                index,
                // handleDragEnd
            } = this.props;
        const data = {index,listNo:card.listNo};
        return (
            <div 
                className="card" 
                // draggable
                // onDragStart={(e) => handleCardDragStart(data,e)}
                // onDragEnd={()=>handleDragEnd()}
            >
                <span className="content-editable" onClick={this.handleCardClick}>
                    {card.text}
                </span>
            </div>
        )
    }
}

export default Card;