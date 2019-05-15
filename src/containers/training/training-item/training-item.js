import React, {memo} from 'react';
import { Link } from 'react-router-dom';

import styles from './training-item.scss';

const TrainingItem = ({game}) => {
    return (
        <section className={styles["training-item-container"]}>
            <header>
                <div className={styles["avatar"]}></div>
                <h1>{game.title}</h1>
            </header>
            <p>{game.description}</p>
            <div className={styles["entry"]}>
                <Link to={game.link}>Играть</Link>
            </div>
        </section>
    )
}

export default memo(TrainingItem)