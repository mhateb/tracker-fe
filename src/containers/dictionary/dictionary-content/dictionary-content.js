import React, {memo, useState} from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';

import Table from '../../../components/table/table';
import EditIcon from '../../../../resources/icons/edit.svg';
import DeleteIcon from '../../../../resources/icons/delete.svg';
import AddIcon from '../../../../resources/icons/add.svg'

import styles from './dictionary-content.scss';

const DictionaryContent = ({selectedPack, addNewWordRequest, handleSubmit, removePackRequest}) => {
    const [isEdit, setIsEdit] = useState(false)

    const handleAddClick = () => {
      setIsEdit(true)
    }

    const handleRemoveClick = () => {
      removePackRequest(selectedPack)
    }

    return (
        <div className={styles["dictionary-content"]}>
          <header>
            <span>{selectedPack.title}</span>
            <button><img src={EditIcon} alt="Edit"/></button>
            <button onClick={handleRemoveClick}><img src={DeleteIcon} alt="Delete"/></button>
          </header>
          {
            selectedPack.words.length > 0 ? (
              <>
                <Table words={selectedPack.words} />
                {
                  isEdit ? (
                    <form className={styles["inputs-word"]}>
                      <Field name="original" component="input" type="text" placeholder="Слово" required />
                      <Field name="translate" component="input" type="text" placeholder="Перевод" required />
                      <button type="submit" onClick={handleSubmit((val) => addNewWordRequest(val))}>
                        <img src={AddIcon} />
                      </button>
                    </form>
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
                    <form className={styles["inputs-word"]}>
                      <Field name="original" component="input" type="text" placeholder="Слово" required />
                      <Field name="translate" component="input" type="text" placeholder="Перевод" required />
                      <button type="submit" onClick={handleSubmit((val) => addNewWordRequest(val))}>
                        <img src={AddIcon} />
                      </button>
                    </form>
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
  memo,
  reduxForm({
    form: 'add-new-word-form'
  })
)(DictionaryContent)