import React from 'react';
import classnames from 'classnames';

import styles from './PageContainer.module.scss';

const Container = ({ children, className }) => {
  return (
    <div className={classnames(styles['page-container'], className)}>
      <div className={styles['page-container__content']}>{children}</div>
    </div>
  );
};

export default Container;
