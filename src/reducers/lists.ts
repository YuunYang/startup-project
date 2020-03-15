import { List } from 'immutable';
import { List as ListType, ListAction } from '~/types';
import { ADD_LIST, REMOVE_LIST } from '~/constants';

const lists = (state: List<ListType>, action: ListAction): List<ListType> => {
  switch (action.type) {
    case ADD_LIST:
      return state.push({
        id: action.id,
        text: action.text,
      });
    case REMOVE_LIST:
      return state.filterNot((x: ListType) => x.id === action.id);
    default:
      return state;
  }
};

export default lists;
