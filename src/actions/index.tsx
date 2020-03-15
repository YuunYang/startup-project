import { ReactNode } from 'react';
import { ADD_TODO, TOGGLE_TODO } from '~/constants';
import { TodoAction } from '~/types';

export const addTodo = (text: string | ReactNode): TodoAction => ({
  type: ADD_TODO,
  text,
});

export const toggleTodo = (id: number): TodoAction => ({
  type: TOGGLE_TODO,
  id,
});
