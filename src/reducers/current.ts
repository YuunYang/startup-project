import { List as ListType, CurrentAction } from '~/types';
import { TOGGLE_CURRENT } from '~/constants';

const initCurrent = {
  text: '',
  id: 0,
};

const current = (state: ListType = initCurrent, action: CurrentAction): ListType => {
  switch (action.type) {
    case TOGGLE_CURRENT:
      return {
        id: action.id,
        text: action.text,
      };
    default:
      return state;
  }
};

export default current;
