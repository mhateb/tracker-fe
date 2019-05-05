import React, {memo, useState} from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';

import AddIcon from '../../../../resources/icons/add.svg';

import styles from './dictionary-empty.scss';

const DictionaryEmpty = ({handleSubmit, addNewPackRequest}) => {
    const [isEdit, setIsEdit] = useState(false)

    const handleAddClick = () => {
        setIsEdit(true)
    }

    return (
        <section className={styles["dictionary-empty-container"]}>
            <header>
                <h1>Мой словарь</h1>
                <p>Добавление новых коллекций или слов</p>
                <p>Также манипуляция с коллекциями и словами</p>
            </header>
            <section>
                <p>Начни использовать словарь просто добавив новую коллекцию</p>
                {
                    isEdit ? (
                        <div className={styles["add-pack"]}>
                            <form onSubmit={handleSubmit(val => addNewPackRequest(val))}>
                                <label htmlFor="title">Добавить коллекцию</label>
                                <Field name="title" component="input" type="text" placeholder="Название коллекции" required />
                                <button type="submit">
                                    <img src={AddIcon} />
                                </button>
                            </form>
                        </div>
                    ) : (
                        <button onClick={handleAddClick}>
                            <img src={AddIcon} />
                            Добавить
                        </button>
                    )
                }
            </section>
        </section>
    )
}

export default compose(
    memo,
    reduxForm({
        form: 'add-new-pack-form-2'
    })
)(DictionaryEmpty)