import { List as ImList } from 'immutable';
import { List as ListTypes } from './actions';

export interface ListProps {
  lists: ImList<ListTypes>;
  todoCount?: number;
  addList: (id: number, text: string) => void;
}
