import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'

import TrainingHeader from './training-header/training-header';
import TrainingEmpty from './training-empty/training-empty';
import TrainingContent from './training-content/training-content';
import Wrapper from 'components/wrapper/wrapper';
import { getPacksRequest, setPack } from 'actions/packsActions';

import styles from './training.scss';

class Training extends React.PureComponent {
  componentDidMount() {
    const {getPacksRequest, isSet} = this.props

    if(!isSet) {
      getPacksRequest()
    }
  }

  render () {
    const { 
      setPack,
      selectedPack,
      isAnyPacks,
      packs,
      loading,
      isFail,
      games
    } = this.props

    return (
      <Wrapper isLoading={loading} isFail={isFail}>
        {
          isAnyPacks ? (
            <section className={styles["training-container"]}>
              <TrainingHeader packs={packs} selectedPack={selectedPack} setPack={setPack} />
              <TrainingContent games={games} selectedPack={selectedPack} />
            </section>
          ) : (
              <TrainingEmpty />
            )
          }
        </Wrapper>
    )
  }
};

function mapStateToProps(state) {
  const { packs } = state

  return { 
    selectedPack: packs.selectedPack,
    isAnyPacks: packs.isAnyPacks,
    packs: packs.items,
    loading: packs.loading,
    isSet: packs.isSet,
    isFail: packs.isFail,
    games: state.training.games
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getPacksRequest: () => dispatch(getPacksRequest()),
      setPack: (event) => dispatch(setPack(event.target.value)),
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Training)
