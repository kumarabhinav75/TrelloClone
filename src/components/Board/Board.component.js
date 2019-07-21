import React, { Component } from 'react';
import CardList from '../CardList/CardList.component';
import './Board.css';


class Board extends Component {

    constructor(props){
        super(props);
    }

    renderBoard(boardData){
        console.log('insideee')
        return boardData.map((list) => {
            return <CardList list={list} />
        })
    }

    render() {
        const {boardData} = this.props;
        return (
            <div className="board-container">
                {this.renderBoard(boardData)}
            </div>
        )
    }
}
  
export default Board;
  