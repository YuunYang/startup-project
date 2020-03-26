import { ReactNode } from 'react';
import {
  ADD_TODO, REMOVE_TODO, TOGGLE_TODO, ADD_LIST, TOGGLE_CURRENT,
} from '~/constants';
import { TodoAction, ListAction, CurrentAction } from '~/types';

export const addTodo = (
  text: string | ReactNode,
  id: number,
  list: number,
): TodoAction => ({
  type: ADD_TODO,
  id,
  text,
  list,
});

export const removeTodo = (id: number, list: number): TodoAction => ({
  type: REMOVE_TODO,
  id,
  list,
});

export const toggleTodo = (id: number, list: number): TodoAction => ({
  type: TOGGLE_TODO,
  id,
  list,
});

export const addList = (id: number, text: string): ListAction => ({
  type: ADD_LIST,
  id,
  text,
});

export const toggleCurrent = (id: number, text: string): CurrentAction => ({
  type: TOGGLE_CURRENT,
  id,
  text,
});
