import React, {memo} from 'react';
import { Link } from 'react-router-dom';

import styles from './auth-widget.scss'

const AuthWidget = () => {
    return (
        <div className={styles['auth-widget-container']}>
            <Link to='/login' className={styles['auth-link-login']}>Войти</Link>
            <Link to='/register' className={styles['auth-link-register']}>Регистрация</Link>
        </div>
    )
}

export default memo(AuthWidget)