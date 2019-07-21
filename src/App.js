import React, { Component } from 'react';
import Board from './components/Board/Board.component'
import './App.css'

// const newBoard = [
//     {
//       "name":"list1",
//       "cards": ["card1","card2","card3","card4"]
//     },
//     {
//       "name":"list2",
//       "cards": ["card1","card2","card3","card4"]
//     },
//     {
//       "name":"list3",
//       "cards": ["card1","card2","card3","card4"]
//     },
//     {
//       "name":"list4",
//       "cards": ["card1","card2","card3","card4"]
//     }
// ];

// const BoardData = {
//   "To-Do": ["add redux to app","add edit functionalities to names","make responsive","add drag feature"],
//   "In-Progress": ["create actions","change store design","update components","create reducers"],
//   "Code Review": ["list3 card1","list3 card2","list3 card3","list3 card4"],
//   "QA": ["list4 card1","list 4card2","list c4ard3","list ca4rd4"]
// }

const store = {
  cards: [
          {
              "text":"add redux to app",
              "listNo": 1
            },
          {
              "text":"add edit functionalities to names",
              "listNo": 1
            },
          {
              "text":"make responsive",
              "listNo": 1
            },
          {
              "text":"add drag feature",
              "listNo": 1
            },
          {
              "text":"add redux to app",
              "listNo": 2
            },
          {
              "text":"add edit functionalities to names",
              "listNo": 2
            },
          {
              "text":"make responsive",
              "listNo": 2
            },
          {
              "text":"add drag feature",
              "listNo": 2
            },
          {
              "text":"add redux to app",
              "listNo": 3
            },
            {
              "text":"add edit functionalities to names",
              "listNo": 3
            },
            {
              "text":"make responsive",
              "listNo": 3
            },
            {
              "text":"add drag feature",
              "listNo": 3
            },
            {
              "text":"add redux to app",
              "listNo": 4
            },
            {
              "text":"add edit functionalities to names",
              "listNo": 4
            },
            {
              "text":"make responsive",
              "listNo": 4
            },
            {
              "text":"add drag feature",
              "listNo": 4
            },
          ],
  list: [
    "To-do",
    "In Progress",
    "Code Review",
    "QA",
  ]
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Trello
        </h1>
        <Board cardData={store.cards} listNames={store.list}/>
      </div>

    );
  }
}

export default App;
