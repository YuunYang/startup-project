import { ReactNode } from 'react';

export interface Action {
  type: string;
}

export interface Todo {
  id: number;
  list: number;
  text?: string | ReactNode;
  completed?: boolean;
}

export interface List {
  text: string;
  id: number;
}

export interface State {
  todos: Todo[];
  lists: List[];
}

export interface TodoAction extends Action, Todo { }

export interface ListAction extends Action, List { }
