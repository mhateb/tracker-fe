import React, {memo} from 'react';
import { Link } from 'react-router-dom';

import styles from './games-list-item.scss';

const GamesListItem = ({game}) => {
    return (
        <div className={styles["game-item-container"]}>
            <header>
                <span>{game.title}</span>
            </header>
            <footer>
                <p>{game.description}</p>
            </footer>
            <div className={styles.action}>
                <Link>Играть</Link>
            </div>
        </div>
    )
}

export default memo(GamesListItem)