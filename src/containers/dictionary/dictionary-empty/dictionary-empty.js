import React, {memo} from 'react';

import AddIcon from '../../../../resources/icons/add.svg';

import styles from './dictionary-empty.scss';

const DictionaryEmpty = () => {
    return (
        <section className={styles["dictionary-empty-container"]}>
            <header>
                <h1>Мой словарь</h1>
                <p>Добавление новых коллекций или слов</p>
                <p>Также манипуляция с коллекциями и словами</p>
            </header>
            <section>
                <p>Начни использовать словарь просто добавив новую коллекцию</p>
                <button>
                    <img src={AddIcon} />
                    Добавить
                </button>
            </section>
        </section>
    )
}

export default memo(DictionaryEmpty)