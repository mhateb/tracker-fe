import React, {memo} from 'react';
import { Field, reduxForm } from 'redux-form';
import {compose} from 'redux';

import AddIcon from '../../../../resources/icons/add.svg';

import styles from './dictionary-header.scss';

const DictionaryHeader = ({packs, addNewPackFetch, selectedPack, handleSubmit}) => {

    const getOptions = (packs) => (
        packs.map(item => {
            if (item.id === selectedPack.id) {
                return <option selected key={item.id}>{item.title}</option>
            }

            return <option key={item.id}>{item.title}</option>
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
                <select name="packname">
                {
                    getOptions(packs)
                }
                </select>
            </div>
            <div className={styles["add-pack"]}>
                <form onSubmit={handleSubmit(val => addNewPackFetch(val))}>
                    <label htmlFor="title">Добавить коллекцию</label>
                    <Field name="title" component="input" type="text" placeholder="Название коллекции" required />
                    <button type="submit">
                        <img src={AddIcon} />
                    </button>
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