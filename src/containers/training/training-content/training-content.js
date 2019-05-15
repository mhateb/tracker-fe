import React, {memo} from 'react';

import TrainingItem from '../training-item/training-item';

import styles from './training-content.scss';

const TrainingContent = ({games, selectedPack}) => {
    return(
        <section className={styles["training-content-container"]}>
            {
                games.map(game => (
                    <TrainingItem key={game.id} game={game} selectedPack={selectedPack} />
                ))
            }
        </section>
    )
}

export default memo(TrainingContent)