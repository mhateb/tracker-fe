import React, {memo} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'

import TrainingHeader from './training-header/training-header';

import styles from './training.scss';

const Training = ({packs, selectedPack, setPack}) => {
  return (
    <section className={styles["training-container"]}>
      <TrainingHeader packs={packs} selectedPack={selectedPack} setPack={setPack} />
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

const mapDispatchToProps = (dispatch) => {
  return {
      setPack: (event) => dispatch(setPack(event.target.value)),
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  memo
)(Training)
