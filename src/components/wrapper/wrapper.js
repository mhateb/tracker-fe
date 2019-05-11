import React from 'react';

import Loading from 'resources/loading.gif';

import styles from './wrapper.scss';

const Wrapper = ({ children, isLoading, isFail }) => {
            if (isLoading) {
                return (
                    <div className={styles.loader}>
                        <img src={Loading} alt="Loading..." />
                    </div>
                )
            } else if (isFail) {
                return (
                    <div className={styles.error}>
                        <p>Что-то пошло не так...</p>
                        <p>Попробуйте перезагрузить страницу</p>
                        <p>Если не помогло обратитесь в тех поддержку</p>
                    </div>
                )
            } else {
                return (
                    children
                )
            }
}

export default Wrapper