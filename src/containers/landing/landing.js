import React, {Fragment, memo} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import AuthWidget from './auth-widget/auth-widget';

import styles from './landing.scss'

class Landing extends React.PureComponent {
    render () {
        const { user } = this.props

        return (
            <Fragment>
                <header className={styles['landing-header']}>
                    <p>Landing header</p>
                    <AuthWidget 
                        user={user}
                    />
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

function mapStateToProps(state) {
    return { 
      user: state.user
    }
  }

export default compose(
    connect(
        mapStateToProps,
        null
    ),
    memo
)(Landing)