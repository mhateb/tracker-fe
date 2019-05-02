import React, {memo} from 'react';
import { connect } from 'react-redux';

import TrainingHeader from './training-header/training-header';
import GamesList from './games-list/games-list';

import styles from './training.scss';

const Training = ({packs}) => {
  return (
    <section className={styles["training-container"]}>
      <TrainingHeader packs={packs} />
      <GamesList />
    </section>
  )
};

function mapStateToProps(state) {
  const { packs } = state

  return { 
    selectedPack: packs.selectedPack,
    packs: packs.items
  }
}

export default connect(mapStateToProps, memo)(Training)
