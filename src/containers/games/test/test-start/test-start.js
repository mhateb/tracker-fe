import React, {memo} from 'react';

import styles from './test-start.scss';

class TestStart extends React.PureComponent {
    render () {
        const { setStart } = this.props

        return (
            <section className={styles["test-start-container"]}>
                <p>Готовы к тесту?</p>
                <button onClick={setStart}>Старт</button>
            </section>
        )
    }
}

export default memo(TestStart)