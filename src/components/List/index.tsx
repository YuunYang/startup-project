/* eslint-disable react/jsx-props-no-spreading */
import React, {
  ReactElement, useState, ChangeEvent, useEffect,
} from 'react';
import cls from 'classnames';
import Icon from '../Icon';
import { missMinNum } from '~/utils';
import { ListProps, List as ListType } from '~/types';
import styles from './index.scss';

const List = (props: ListProps): ReactElement => {
  const {
    lists, todoCount, addList, toggleCurrent,
  } = props;
  const [selected, setSelected] = useState(0);
  const [newListId, setNewListId] = useState(1);
  const [newListName, setNewListName] = useState('');
  useEffect(() => {
    const id: number = missMinNum(lists.map((l) => l.id).toJS());
    setNewListId(id);
  }, [newListName]);
  const handleListClick = (id: number, li: ListType): void => {
    setSelected(id);
    toggleCurrent(li.id, li.text);
  };
  const handleNewListChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewListName(e.target.value);
  };
  const handleAddList = (): void => {
    if (newListName !== '') {
      addList(newListId, newListName);
    }
  };
  return (
    <section className={styles.lists}>
      {lists.map((li: ListType, index: number) => (
        <button
          type="button"
          onClick={(): void => handleListClick(index, li)}
          className={cls(styles['list-item'], {
            [styles.selected]: selected === index,
          })}
          key={`list-${li.text}`}
        >
          {li.icon && <Icon type={li.icon} />}
          <span className={styles.text}>{li.text}</span>
          <span className={styles.count}>{todoCount || 0}</span>
        </button>
      ))}
      <section className={styles['add-list']}>
        <button
          type="button"
          onClick={handleAddList}
        >
          <Icon type="plus-circle" size="2x" />
        </button>
        <input
          type="text"
          placeholder="Please type the list name"
          onChange={handleNewListChange}
        />
      </section>
    </section>
  );
};

export default List;
