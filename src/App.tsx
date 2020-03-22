import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { List } from 'immutable';
import rootReducers from './reducers';
import Main from './containers/Main';
import { State } from '~/types';

const initialState: State = {
  lists: List([{
    id: 0,
    text: 'Tasks',
    icon: 'check-circle',
  }]),
  todos: List(),
  current: {
    id: 0,
    text: 'Tasks',
    icon: 'check-circle',
  },
};

const store = createStore(rootReducers, initialState);

const App = (): ReactElement => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
