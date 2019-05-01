import React from 'react';

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
          <h1>Словарь</h1>
          {
              isAnyPacks ? (
                <div className={styles["pack-select"]}>
                    <label htmlFor="packname">Выберете набор слов:</label>
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
         
        </header>
    )
}

export default DictionaryHeader