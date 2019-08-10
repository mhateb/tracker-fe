import React, {memo} from 'react';
import { Field, reduxForm } from 'redux-form';
import {compose} from 'redux';

import AddIcon from 'resources/icons/add.svg';

import styles from './dictionary-header.scss';

const DictionaryHeader = ({packs, addNewPackRequest, selectedPack, handleSubmit, setPack}) => {

    const getOptions = (packs) => (
        packs.map(item => {
            return <option value={item.id} key={item.id}>{item.title}</option>
        })
    )

    return (
        <header className={styles["dictionary-header"]}>
          <h1>Мой словарь</h1>
          <p>Добавление новых коллекций слов и новых слов.</p>
          <p>Манипуляции над уже добавленными словами.</p>
          <div className={styles.actions}>
            <div className={styles["pack-select"]}>
                <label htmlFor="packname">Коллекция:</label>
                <select name="packname" onChange={setPack} value={selectedPack.id || null}>
                {
                    getOptions(packs)
                }
                </select>
            </div>
            <div className={styles["add-pack"]}>
                <form onSubmit={handleSubmit(val => addNewPackRequest(val))}>
                    <label htmlFor="title">Добавить коллекцию:</label>
                    <div>
                        <Field name="title" component="input" type="text" placeholder="Название коллекции" required />
                        <button type="submit">
                            <img src={AddIcon} />
                        </button>
                    </div>
                </form>
            </div>
         </div>
        </header>
    )
}

export default compose(
    memo,
    reduxForm({
        form: 'add-new-pack-form'
    })
)(DictionaryHeader)