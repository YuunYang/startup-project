import { List } from 'immutable';
import { List as ListType, ListAction } from '~/types';
import { ADD_LIST, REMOVE_LIST } from '~/constants';

const initLists = List();

const lists = (state: List<ListType> = initLists, action: ListAction): ListType [] => {
  switch (action.type) {
    case ADD_LIST:
      return state.push({
        id: action.id,
        text: action.text,
      }).toJS();
    case REMOVE_LIST:
      return state.filterNot((x: ListType) => x.id === action.id).toJS();
    default:
      return state.toJS();
  }
};

export default lists;
