import React, {memo} from 'react';

import styles from './dictionary-header.scss';

const DictionaryHeader = ({packs}) => {
    const isAnyPacks = !!packs

    const getOptions = (packs) => (
        packs.map(item => (
        <option key={item.id}>{item.title}</option>
        ))
    )

    return (
        <header className={styles["dictionary-header"]}>
          <h1>Мой словарь</h1>
          <p>Добавление новых коллекций слов и новых слов.</p>
          <p>Манипуляции над уже добавленными словами.</p>
          <div className={styles.actions}>
          <div className={styles.search}>
            <input type="text" placeholder="Поиск" />
          </div>
          {
              isAnyPacks ? (
                <div className={styles["pack-select"]}>
                    <label htmlFor="packname">Коллекция:</label>
                    <select name="packname">
                    {
                        getOptions(packs)
                    }
                    </select>
                </div>
              ) : (
                  null
              )
          }
         </div>
        </header>
    )
}

export default memo(DictionaryHeader)