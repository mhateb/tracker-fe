import React, {memo} from 'react';

import styles from './training-header.scss';

const TrainingHeader = ({packs, selectedPack, setPack}) => {

    const getOptions = (packs) => (
        packs.map(item => {
            return <option value={item.id} key={item.id}>{item.title}</option>
        })
    )

    return (
        <header className={styles["training-header"]}>
            <h1>Упражнения</h1>
            <p>Здесь можно потренироваться</p>
            <p>С помощью упражнений слова запоминаются в разы легче</p>
            <div className={styles.actions}>
                <div className={styles["pack-select"]}>
                    <label htmlFor="packname">Коллекция:</label>
                    <select name="packname" onChange={setPack} value={selectedPack.id || null}>
                    {
                        getOptions(packs)
                    }
                    </select>
                </div>
            </div>
        </header>
    )
}

export default memo(TrainingHeader)