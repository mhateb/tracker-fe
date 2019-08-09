import React from 'react';

import CardPack from "components/card-pack/card-pack";

import styles from "./news.scss";

const News = () => {
  return (
    <section className={styles["news-container"]}>
      <CardPack />
      <CardPack />
      <CardPack />
      <CardPack />
      <CardPack />
    </section>
  )
}

export default News;