import React, {memo} from 'react';

import GamesListItem from './games-list-item/games-list-item';

import styles from './games-list.scss';

const GamesList = () => {
    const games = [
        {
            id: 0,
            title: 'Угадай',
            description: 'Слова на английском будут появляться по очереди, ваша задача написать перевод на русском'
        },
        {
            id: 1,
            title: 'ЛУЛЛОЛ',
            description: 'ИГРАКАКАВАа ааааааааа аааааа ааааааа ааааааа аааааааааа аааааааааа ааааааааааааа ааааааааааааа ааааааааа'
        }
    ]

    return (
        <section className={styles["games-container"]}>
            <GamesListItem game={games[0]} />
            <GamesListItem game={games[0]} />
            <GamesListItem game={games[0]} />
            <GamesListItem game={games[1]} />
            <GamesListItem game={games[1]} />
            <GamesListItem game={games[1]} />
        </section>
    )
}

export default memo(GamesList)