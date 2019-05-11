import React, { Fragment } from 'react';

import Sidebar from 'containers/sidebar/sidebar';

import styles from './default.scss';

const Default = ({ children }) => {
  return (
    <Fragment>
      <Sidebar />
      <main className={styles.content}>
        {
          children
        }
      </main>
    </Fragment>
  )
}

export default Default
