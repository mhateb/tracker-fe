import React, {memo} from 'react';
import Table from '../../../components/table/table';

import styles from './dictionary-content.scss';

const DictionaryContent = ({packs}) => {
    
    return (
        <div className={styles["dictionary-content"]}>
          <Table words={packs[0].words} />
          <button className={styles["add-button"]}>Добавить слово</button>
        </div>
    )
}

export default memo(DictionaryContent)