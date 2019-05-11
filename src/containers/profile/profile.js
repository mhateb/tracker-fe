import React from 'react'

import AvatarIcon from 'resources/icons/avatar.svg';

import styles from './profile.scss';

class Profile extends React.PureComponent {
  render () {
    return (
      <section className={styles["profile-container"]}>
        <h2>Профиль</h2>
        <div className={styles["profile-info"]}>
          <div className={styles["info"]}>
            <p>Keks</p>
            <p>г. Москва</p>
          </div>
          <img src={AvatarIcon} alt="avatar"/>
        </div>
        <h2>Статистика</h2>
        <div className={styles["profile-packs"]}>
          <p>Количество коллекций: 36</p>
          <p>Количество слов: 353</p>
        </div>
        <h2>Рейтинг</h2>
        <div className={styles["profile-rating"]}>
          
        </div>
      </section>
    )
  }
}

export default Profile
