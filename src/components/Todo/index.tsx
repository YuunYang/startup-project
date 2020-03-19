/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { Todo as TodoProps } from '~/types';

const Todo = (props: TodoProps): ReactElement => {
  const { completed, text } = props;
  return (
    <li
      className={completed ? 'completed' : ''}
    >
      {text}
    </li>
  );
};

const TodoList = (props: { todos: TodoProps[] }): ReactElement => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo: TodoProps) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
