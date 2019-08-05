import React from 'react';
import { Field, reduxForm } from 'redux-form';

import AddIcon from 'resources/icons/add.svg';
import styles from '../dictionary-content.scss';

const AddWordForm = ({handleSubmit, addNewWordRequest, setIsEdit}) => {
    return (
        <form className={styles["inputs-word"]}>
            <Field name="original" component="input" type="text" placeholder="Слово" required />
            <Field name="translate" component="input" type="text" placeholder="Перевод" required />
            <button type="submit" onClick={handleSubmit((val) => {addNewWordRequest(val); setIsEdit(false)})}>
                <img src={AddIcon} />
            </button>
        </form>
    )
}

export default reduxForm({
    form: 'add-word-form'
})(AddWordForm)