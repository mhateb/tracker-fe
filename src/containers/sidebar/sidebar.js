import React, { PureComponent } from "react";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import Logo from 'resources/icons/logo.svg';
import ProfileIcon from 'resources/icons/profile.svg';
import NewsIcon from 'resources/icons/news.svg';
import DictionaryIcon from 'resources/icons/dictionary.svg';
import TrainingIcon from 'resources/icons/training.svg';
import RatingIcon from 'resources/icons/rating.svg';
import LogoutIcon from 'resources/icons/logout.svg';
import { userLogout } from 'actions/userActions';

import styles from "./sidebar.scss";

class Sidebar extends PureComponent {
  state = {
    profileLinks: [
      {
        id: 0,
        title: "Профиль",
        link: "/profile",
        icon: <img src={ProfileIcon} />
      },
      {
        id: 1,
        title: "Новости",
        link: "/news",
        icon: <img src={NewsIcon} />
      }
    ],
    dictionaryLinks: [
      {
        id: 3,
        title: "Словарь",
        link: "/dictionary",
        icon: <img src={DictionaryIcon} />
      },
      {
        id: 4,
        title: "Упражнения",
        link: "/training",
        icon: <img src={TrainingIcon} />
      },
      {
        id: 5,
        title: "Рейтинг",
        link: "/rating",
        icon: <img src={RatingIcon} />
      }
    ]
  }

  getProfileLinks = () => (
    this.state.profileLinks.map((item) => (
      <div className={styles["sidebar-block-item"]} key={item.id}>
        <Link to={item.link}>
          {item.icon}
          <span>{item.title}</span>
        </Link>
      </div>
    ))
  )

  getDictionaryLinks = () => (
    this.state.dictionaryLinks.map((item) => (
      <div className={styles["sidebar-block-item"]} key={item.id}>
       
        <Link to={item.link}>
          {item.icon}
          <span>{item.title}</span>
        </Link>
      </div>
    ))
  )

  render () {
    const {userLogout} = this.props

    return (
      <aside className={styles.sidebar}>
        <img src={Logo} className={styles.logo} />
        <div className={styles["sidebar-block"]}>
          <p>Профиль</p>
          {
            this.getProfileLinks()
          }
        </div>
        <div className={styles["sidebar-block"]}>
          <p>Словарь</p>
          {
            this.getDictionaryLinks()
          }
        </div>
        <div className={styles["sidebar-block"]}>
          <div className={styles["sidebar-block-item"]}>
            <Link to="/" onClick={userLogout}>
              <img src={LogoutIcon} />
              <span>Выйти</span>
            </Link>
          </div>
        </div>
      </aside>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      userLogout: () => dispatch(userLogout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Sidebar)
