import React from 'react';
import { Link } from 'react-router-dom';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

import styles from './test-end.scss';

class TestEnd extends React.PureComponent {
    render () {
        return(
            <section className={styles["test-end-container"]}>
                <p>Колличество правильных ответов 4 из 15</p>
                <p>Написать фразу в зависимости от процента правильных ответов</p>
                <p>Где-то справа надо показать новую диаграмму рейтинга для этого пака</p>
                <ReactMinimalPieChart
                    data={[
                        {
                            value: 82,
                            color: '#ffdb17',
                        },
                        {
                            value: 18,
                            color: 'black'
                        }
                    ]}
                    totalValue={100}
                    lineWidth={20}
                    animate
                    style={{height: '300px'}}
                />
                <div>
                    <Link to="/dictionary">Пройти тест снова</Link>
                    <Link to="/dictionary">Вернуться к упражнениям</Link>
                </div>
            </section>
        )
    }
}

export default TestEnd