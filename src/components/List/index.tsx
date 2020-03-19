/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { Todo as TodoProps } from '~/types';

const List = (props: TodoProps): ReactElement => {
  const { completed, text } = props;
  return (
    <li
      className={completed ? 'completed' : ''}
    >
      {text}
    </li>
  );
};

export default List;
