import React, { PureComponent } from "react";

import Logo from "../../../resources/icons/logo.svg";

import styles from "./sidebar.scss";

class Sidebar extends PureComponent {
  state = {
    profileLinks: [
      {
        id: 0,
        title: "Profile",
        link: "/profile",
        icon: ""
      },
      {
        id: 1,
        title: "Announcment",
        link: "/announcment",
        icon: ""
      },
      {
        id: 2,
        title: "Options",
        link: "/options",
        icon: ""
      }
    ],
    dictionaryLinks: [
      {
        id: 3,
        title: "My dictionary",
        link: "/dictionary",
        icon: ""
      },
      {
        id: 4,
        title: "Training",
        link: "/training",
        icon: ""
      },
      {
        id: 5,
        title: "Rating",
        link: "/rating",
        icon: ""
      }
    ]
  }

  getProfileLinks = () => (
    this.state.profileLinks.map((item) => (
      <div className={styles["sidebar-block-item"]} key={item.id}>
        <img/>
        <a href={item.link}>
          <a>{item.title}</a>
        </a>
      </div>
    ))
  )

  getDictionaryLinks = () => (
    this.state.dictionaryLinks.map((item) => (
      <div className={styles["sidebar-block-item"]} key={item.id}>
        <img/>
        <a href={item.link}>
          <a>{item.title}</a>
        </a>
      </div>
    ))
  )

  render () {
    return (
      <aside className={styles.sidebar}>
        <img src={Logo} className={styles.logo} />
        <div className={styles["sidebar-block"]}>
          <p>Profile</p>
          {
            this.getProfileLinks()
          }
        </div>
        <div className={styles["sidebar-block"]}>
          <p>Dictionary</p>
          {
            this.getDictionaryLinks()
          }
        </div>
        <div className={styles["sidebar-block"]}>
          <div className={styles["sidebar-block-item"]}>
            <img />
            <Link href="/">
              <a>Exit</a>
            </Link>
          </div>
        </div>
      </aside>
    );
  }
}

export default Sidebar
