/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { List } from 'immutable';
import { Todo as TodoType, List as ListType } from '~/types';
import styles from './index.scss';

const Todo = (props: TodoType): ReactElement => {
  const { completed, text } = props;
  return (
    <li
      className={completed ? 'completed' : ''}
    >
      {text}
    </li>
  );
};

const TodoList = (props: { todos: List<TodoType>; current: ListType }): ReactElement => {
  const { todos, current } = props;
  return (
    <div>
      <h3 className={styles.title}>{current.text}</h3>
      <ul>
        {todos.map((todo: TodoType) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
