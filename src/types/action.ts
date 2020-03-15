import { ReactNode } from 'react';

export interface Action {
  type: string;
}

export interface TodoAction extends Action {
  text?: string | ReactNode;
  id?: number;
}
