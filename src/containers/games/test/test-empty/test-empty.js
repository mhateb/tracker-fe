import React from 'react';
import { Link } from 'react-router-dom';

import styles from './test-empty.scss';

class TestEmpty extends React.PureComponent {
    render () {
        return (
            <section className={styles["test-empty-container"]}>
                <p>Недостаточно слов в коллекции. Требуется хотя 15 слов в коллекции.</p>
                <p>Добавьте их через словарь</p>
                <Link to="/dictionary">Перейти в словарь</Link>
            </section>
        )
    }
}

export default TestEmpty