import React from 'react';
import Table from '../../../components/table/table';

import styles from './dictionary-content.scss';

const DictionaryContent = ({packs}) => {
    
    return (
        <div>
          <Table words={packs[0].words} />
        </div>
    )
}

export default DictionaryContent