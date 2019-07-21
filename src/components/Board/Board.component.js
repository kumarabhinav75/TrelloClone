import React, { Component } from 'react';
import CardList from '../CardList/CardList.component';

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
        return this.renderBoard(boardData)
    }
}
  
export default Board;
  