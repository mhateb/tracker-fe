import React from 'react';
import { Field, reduxForm } from 'redux-form';

import TickIcon from 'resources/icons/tick.svg';

import styles from '../dictionary-content.scss';

const UpdatePackForm = ({handleSubmit, updatePackRequest, setIsUpdatePack}) => {

    const updatePack = (val) => {
        updatePackRequest(val)
        setIsUpdatePack(false)
    }

    return (
        <form className={styles["form-update"]} onSubmit={handleSubmit(val => updatePack(val))}>
            <Field name="title" component="input" type="text" required />
            <button type="submit">
                <img src={TickIcon} />
            </button>
        </form>
    )
}

export default reduxForm({
    form: 'update-pack-form'
})(UpdatePackForm)