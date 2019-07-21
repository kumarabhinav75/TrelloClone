import React, { Component } from 'react';
import Board from './containers/Board.container';
import './App.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Trello
        </h1>
        <Provider store={store}>
          <Board />
        </Provider>
      </div>

    );
  }
}

export default App;
