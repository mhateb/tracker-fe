import React from 'react';
import { connect } from 'react-redux';

import DictionaryHeader from './dictionary-header/dictionary-header';
import DictionaryContent from './dictionary-content/dictionary-content';
import DictionaryEmpty from './dictionary-empty/dictionary-empty';
import Loader from '../../components/loader/loader';
import {getPacksFetch, addNewPackFetch} from '../../actions/packsActions';

import styles from './dictionary.scss';

class Dictionary extends React.PureComponent {
  componentDidMount() {
    const {getPacksFetch, isSet} = this.props

    if(!isSet) {
      getPacksFetch()
    }
  }

  render () {
    const { packs, selectedPack, loading, isAnyPacks, addNewPackFetch } = this.props

    return (
      <Loader isLoading={loading}>
        {
          isAnyPacks ? (
            <section className={styles["dictionary-container"]}>
              <DictionaryHeader packs={packs} addNewPackFetch={addNewPackFetch} selectedPack={selectedPack} />
              <DictionaryContent />
            </section>
          ) : (
            <DictionaryEmpty />
          )
        }
      </Loader>
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
    isSet: packs.isSet
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getPacksFetch: () => dispatch(getPacksFetch()),
      addNewPackFetch: (payload) => dispatch(addNewPackFetch(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary)