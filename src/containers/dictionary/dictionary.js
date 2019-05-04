import React from 'react';
import { connect } from 'react-redux';

import DictionaryHeader from './dictionary-header/dictionary-header';
import DictionaryContent from './dictionary-content/dictionary-content';
import DictionaryEmpty from './dictionary-empty/dictionary-empty';
import Loader from '../../components/loader/loader';
import {
  getPacksRequest, 
  addNewPackRequest, 
  setPack,
  getWordsRequest
} from '../../actions/packsActions';

import styles from './dictionary.scss';

class Dictionary extends React.PureComponent {

  componentDidMount() {
    const {getPacksRequest, isSet} = this.props

    if(!isSet) {
      getPacksRequest()
    }
  }

  render () {
    const { 
      packs,
      selectedPack, 
      loading, 
      isAnyPacks, 
      addNewPackRequest, 
      setPack,
      getWordsRequest 
    } = this.props

    return (
      <Loader isLoading={loading}>
        {
          isAnyPacks ? (
            <section className={styles["dictionary-container"]}>
              <DictionaryHeader 
                packs={packs} 
                addNewPackRequest={addNewPackRequest} 
                selectedPack={selectedPack} 
                setPack={setPack}
              />
              <DictionaryContent 
                selectedPack={selectedPack}
                getWordsRequest={getWordsRequest}
              />
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
      getPacksRequest: () => dispatch(getPacksRequest()),
      addNewPackRequest: (payload) => dispatch(addNewPackRequest(payload)),
      setPack: (event) => dispatch(setPack(event.target.value)),
      getWordsRequest: (payload) => dispatch(getWordsRequest(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary)