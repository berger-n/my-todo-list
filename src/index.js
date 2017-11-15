import React from 'react';
import ReactDOM from 'react-dom';
import TodoListApp from './components/App';

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from "./reducers/"
import { changeFichier } from "./actions"

export const store = createStore(reducer); //Reducer)

render(
   <Provider store={store}>
      <TodoListApp />
   </Provider>,
   document.getElementById('root')
)


console.log(store.getState());

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

/*

      //<div></div>
      
store.dispatch(changeFichier("/BDRC/MISC/truc.txt"))

store.dispatch(changeFichier("/local/.ORG/T.R1"))

*/