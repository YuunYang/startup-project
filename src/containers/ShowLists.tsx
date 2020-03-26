import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { List as ImList } from 'immutable';
import { List } from '~/components';
import { addList, toggleCurrent } from '~/actions';
import { State, List as ListProps } from '~/types';

interface Props{
  lists: ImList<ListProps>;
}

interface Func{
  addList: (id: number, text: string) => void;
  toggleCurrent: (id: number, text: string) => void;
}

const mapStateToProps = (state: State): Props => ({
  lists: state.lists,
});

const mapDispatchToProps = (dispatch: Dispatch): Func => ({
  addList: (id: number, text: string): void => {
    dispatch(addList(id, text));
  },
  toggleCurrent: (id: number, text: string): void => {
    dispatch(toggleCurrent(id, text));
  },
});

const showLists = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default showLists;
