import React, {memo} from 'react';

import styles from './training-header.scss';

const TrainingHeader = ({packs}) => {

    const getOptions = (packs) => (
        packs.map(item => (
        <option key={item.id}>{item.title}</option>
        ))
    )

    return (
        <header className={styles["training-header"]}>
            <h1>Упражнения</h1>
            <div className={styles["pack-select"]}>
                <label htmlFor="packname">Выберете набор слов:</label>
                <select name="packname">
                {
                    getOptions(packs)
                }
                </select>
            </div>
        </header>
    )
}

export default memo(TrainingHeader)