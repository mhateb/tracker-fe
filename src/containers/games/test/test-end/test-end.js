import React from 'react';
import { Link } from 'react-router-dom';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

import styles from './test-end.scss';

class TestEnd extends React.PureComponent {
    render () {
        const { result } = this.props

        return(
            <section className={styles["test-end-container"]}>
                <p>Количество правильных ответов {result.trueAnswers} из {result.trueAnswers + result.falseAnswers}</p>
                <ReactMinimalPieChart
                    data={[
                        {
                            value: result.trueAnswers,
                            color: '#ffdb17',
                        },
                        {
                            value: result.falseAnswers,
                            color: 'black'
                        }
                    ]}
                    totalValue={result.trueAnswers + result.falseAnswers}
                    lineWidth={20}
                    paddingAngle={5}
                    animate
                    className={styles.chart}
                />
                <div className={styles.controls}>
                    <Link to="/training">Пройти тест снова</Link>
                    <Link to="/training">Вернуться к упражнениям</Link>
                </div>
            </section>
        )
    }
}

export default TestEnd