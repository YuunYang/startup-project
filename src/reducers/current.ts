import { List as ListType, CurrentAction } from '~/types';
import { CHANGE_CURRENT } from '~/constants';

const initCurrent = {
  text: '',
  id: 0,
};

const current = (state: ListType = initCurrent, action: CurrentAction): ListType => {
  switch (action.type) {
    case CHANGE_CURRENT:
      return {
        id: action.id,
        text: action.text,
      };
    default:
      return state;
  }
};

export default current;
