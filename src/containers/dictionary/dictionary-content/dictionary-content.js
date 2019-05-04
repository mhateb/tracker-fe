import React, {memo, useEffect} from 'react';

import Table from '../../../components/table/table';
import EditIcon from '../../../../resources/icons/edit.svg';
import DeleteIcon from '../../../../resources/icons/delete.svg';
import AddIcon from '../../../../resources/icons/add.svg'

import styles from './dictionary-content.scss';

const DictionaryContent = ({selectedPack}) => {

    return (
        <div className={styles["dictionary-content"]}>
          <header>
            <span>{selectedPack.title}</span>
            <button><img src={EditIcon} alt="Edit"/></button>
            <button><img src={DeleteIcon} alt="Delete"/></button>
          </header>
          {
            selectedPack.words.length > 0 ? (
              null
            ) : (
              <div className={styles["content-empty"]}>
                <span>У вас пока нет слов в этой коллекции.</span>
                <button className={styles["add-button"]}>
                  <img src={AddIcon} />
                  Добавить слово
                </button>
              </div>
            )
          }
          
        </div>
    )
}

export default memo(DictionaryContent)