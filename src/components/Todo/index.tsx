/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { List } from 'immutable';
import Icon from '../Icon';
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
  const handleAddTodo = (): void => {

  };
  const handleNewTodoChange = (): void => {

  };
  return (
    <div className={styles['todo-list']}>
      <h3 className={styles.title}>{current.text}</h3>
      <ul>
        {todos.map((todo: TodoType) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <section className={styles['add-todo']}>
        <button
          type="button"
          onClick={handleAddTodo}
        >
          <Icon type="plus-circle" size="2x" />
        </button>
        <input
          type="text"
          placeholder="Please type the list name"
          onChange={handleNewTodoChange}
        />
      </section>
    </div>
  );
};

export default TodoList;
