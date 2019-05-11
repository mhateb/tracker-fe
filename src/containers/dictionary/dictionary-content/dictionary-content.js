import React, {memo, useState} from 'react';
import { compose } from 'redux';

import Table from 'components/table/table';
import EditIcon from 'resources/icons/edit.svg';
import DeleteIcon from 'resources/icons/delete.svg';
import AddIcon from 'resources/icons/add.svg'
import AddWordForm from './forms/add-word-form';
import UpdatePackForm from './forms/update-pack-form';

import styles from './dictionary-content.scss';

const DictionaryContent = ({selectedPack, addNewWordRequest, removePackRequest, updatePackRequest, removeWordRequest}) => {
    const [isEdit, setIsEdit] = useState(false)
    const [isUpdatePack, setIsUpdatePack] = useState(false)

    const handleAddClick = () => {
      setIsEdit(true)
    }

    const handleRemoveClick = () => {
      removePackRequest(selectedPack)
    }

    const handleUpdateClick = () => {
      setIsUpdatePack(true)
    }

    return (
        <div className={styles["dictionary-content"]}>
          <header>
            {
              isUpdatePack ? (
                <UpdatePackForm 
                  updatePackRequest={updatePackRequest} 
                  selectedPack={selectedPack} 
                  initialValues={selectedPack} 
                  setIsUpdatePack={setIsUpdatePack} 
                />
              ) : (
                <>
                  <span>{selectedPack.title}</span>
                  <button onClick={handleUpdateClick}><img src={EditIcon} alt="Edit"/></button>
                </>
              )   
            }
            <button onClick={handleRemoveClick}><img src={DeleteIcon} alt="Delete"/></button>
          </header>
          {
            selectedPack.words.length > 0 ? (
              <>
                <Table words={selectedPack.words} removeWordRequest={removeWordRequest}/>
                {
                  isEdit ? (
                    <AddWordForm addNewWordRequest={addNewWordRequest} />
                  ) : (
                    <button onClick={handleAddClick} className={styles["add-button"]}>
                      <img src={AddIcon} />
                      Добавить слово
                    </button>
                  )
                }
              </>
            ) : (
              <div className={styles["content-empty"]}>
                <span>У вас пока нет слов в этой коллекции.</span>
                {
                  isEdit ? (
                    <AddWordForm addNewWordRequest={addNewWordRequest} />
                  ) : (
                    <button onClick={handleAddClick} className={styles["add-button"]}>
                      <img src={AddIcon} />
                      Добавить слово
                    </button>
                  )
                }
              </div>
            )
          }
        </div>
    )
}

export default compose(
  memo
)(DictionaryContent)