import React from 'react';
import ShowLists from '../ShowLists';
import ShowTodoList from '../ShowTodoList';
import styles from './index.scss';

const Main = (): React.ReactElement => (
  <div className={styles.container}>
    <div className={styles['side-bar']}>
      <ShowLists />
    </div>
    <div className={styles.content}>
      <ShowTodoList />
    </div>
  </div>
);

export default Main;
