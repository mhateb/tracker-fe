import React, {Fragment} from 'react';

import AuthWidget from './auth-widget/auth-widget';

import styles from './landing.scss'

class Landing extends React.PureComponent {
    render () {
        return (
            <Fragment>
                <header className={styles['landing-header']}>
                    <p>Landing header</p>
                    <AuthWidget />
                </header>
                <main className={styles['landing-content']}>
                    <p>Landing content</p>
                </main>
                <footer className={styles['landing-footer']}>
                    <p>Landing footer</p>
                </footer>
            </Fragment>
        )
    }
}

export default Landing