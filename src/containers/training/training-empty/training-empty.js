import React from 'react';
import { Link } from 'react-router-dom';

import styles from './training-empty.scss';

const TrainingEmpty = () => {
    return (
        <section className={styles['training-empty-container']}>
            <p>Пока у вас нет ни одной коллекций слов.</p>
            <p>Добавьте их через словарь</p>
            <Link to="/dictionary">Перейти в словарь</Link>
        </section>
    )
}

export default TrainingEmpty