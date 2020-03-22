/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { Icon as IconProps } from '~/types/props';
import styles from './index.scss';

const Icon = (props: IconProps): React.ReactElement => {
  const { type, size = 'sm', ...rest } = props;
  return (
    <i
      className={
        `${styles.fa}
        ${styles[`fa-${size}`]}
        ${styles[`fa-${type}`]}`
      }
      {...rest}
    />
  );
};

export default Icon;
