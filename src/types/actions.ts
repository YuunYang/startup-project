import { ReactNode } from 'react';
import { List as ImList } from 'immutable';

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
  icon?: string;
  id: number;
}

export interface State {
  current: List;
  todos: ImList<Todo>;
  lists: ImList<List>;
}

export interface TodoAction extends Action, Todo { }

export interface ListAction extends Action, List { }

export interface CurrentAction extends Action, List { }
