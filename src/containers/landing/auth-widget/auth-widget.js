import React, {memo} from 'react';
import { Link } from 'react-router-dom';

import styles from './auth-widget.scss'

const AuthWidget = ({user}) => {
    return (
        user.isSet ? (
            <div className={styles['auth-widget-is-set']}>
                <span>{user.username}</span>
                <Link to='/profile'>Перейти в панель</Link>
            </div> 
        ) : (
            <div className={styles['auth-widget-container']}>
                <Link to='/login' className={styles['auth-link-login']}>Войти</Link>
                <Link to='/register' className={styles['auth-link-register']}>Регистрация</Link>
            </div>
        )
    )

    
}

export default memo(AuthWidget)