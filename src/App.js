import React, { Component } from 'react';
import Board from './components/Board/Board.component'
import './App.css'

const newBoard = [
    {
      "name":"list1",
      "cards": ["card1","card2","card3","card4"]
    },
    {
      "name":"list2",
      "cards": ["card1","card2","card3","card4"]
    },
    {
      "name":"list3",
      "cards": ["card1","card2","card3","card4"]
    },
    {
      "name":"list4",
      "cards": ["card1","card2","card3","card4"]
    }
]

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Trello
        </h1>
        <Board boardData={newBoard}/>
      </div>

    );
  }
}

export default App;
