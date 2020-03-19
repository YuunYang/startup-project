import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './reducers';
import ShowTodoList from './containers/ShowTodoList';

const initialState = {};

const store = createStore(rootReducers, initialState);

const App = (): ReactElement => (
  <Provider store={store}>
    <ShowTodoList />
  </Provider>
);

export default App;
