import React from 'react';

import Loading from '../../../resources/loading.gif';

import styles from './loader.scss';

const Loader = ({ children, isLoading }) => {
    return (
            isLoading ? (
                <div className={styles.loader}>
                    <img src={Loading} alt="Loading..." />
                </div>
            ) : (
                children
            )
    );
}

export default Loader