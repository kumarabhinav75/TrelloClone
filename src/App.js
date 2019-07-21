import React, { Component } from 'react';
import Board from './components/Board/Board.component';
import './App.css'

// const store = {
//   cards: [
//           {
//               "text":"add redux to app",
//               "listNo": 1
//             },
//           {
//               "text":"add edit functionalities to names",
//               "listNo": 1
//             },
//           {
//               "text":"make responsive",
//               "listNo": 1
//             },
//           {
//               "text":"add drag feature",
//               "listNo": 1
//             },
//           {
//               "text":"add redux to app",
//               "listNo": 2
//             },
//           {
//               "text":"add edit functionalities to names",
//               "listNo": 2
//             },
//           {
//               "text":"make responsive",
//               "listNo": 2
//             },
//           {
//               "text":"add drag feature",
//               "listNo": 2
//             },
//           {
//               "text":"add redux to app",
//               "listNo": 3
//             },
//             {
//               "text":"add edit functionalities to names",
//               "listNo": 3
//             },
//             {
//               "text":"make responsive",
//               "listNo": 3
//             },
//             {
//               "text":"add drag feature",
//               "listNo": 3
//             },
//             {
//               "text":"add redux to app",
//               "listNo": 4
//             },
//             {
//               "text":"add edit functionalities to names",
//               "listNo": 4
//             },
//             {
//               "text":"make responsive",
//               "listNo": 4
//             },
//             {
//               "text":"add drag feature",
//               "listNo": 4
//             },
//           ],
//   list: [
//     "To-do",
//     "In Progress",
//     "Code Review",
//     "QA",
//   ]
// }

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Trello
        </h1>
        <Board/>
      </div>

    );
  }
}

export default App;
