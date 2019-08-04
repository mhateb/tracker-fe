import React from 'react'

import styles from './profile.scss';

class Profile extends React.PureComponent {
  render () {
    return (
      <section className={styles["profile-container"]}>
        <h1>В разработке</h1>
      </section>
    )
  }
}

export default Profile
