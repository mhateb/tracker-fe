import React from 'react';
import { connect } from 'react-redux';

import DictionaryHeader from './dictionary-header/dictionary-header';
import DictionaryContent from './dictionary-content/dictionary-content';
import DictionaryEmpty from './dictionary-empty/dictionary-empty';
import Wrapper from 'components/wrapper/wrapper';
import {
  getPacksRequest, 
  addNewPackRequest, 
  setPack,
  addNewWordRequest,
  removePackRequest,
  updatePackRequest,
  removeWordRequest
} from 'actions/packsActions';

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
      isFail,
      addNewPackRequest, 
      setPack,
      addNewWordRequest,
      removePackRequest,
      updatePackRequest,
      removeWordRequest
    } = this.props

    return (
      <Wrapper isLoading={loading} isFail={isFail}>
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
                addNewWordRequest={addNewWordRequest}
                removePackRequest={removePackRequest}
                updatePackRequest={updatePackRequest}
                removeWordRequest={removeWordRequest}
              />
            </section>
          ) : (
            <DictionaryEmpty 
              addNewPackRequest={addNewPackRequest}
            />
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
    isFail: packs.isFail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getPacksRequest: () => dispatch(getPacksRequest()),
      addNewPackRequest: (payload) => dispatch(addNewPackRequest(payload)),
      setPack: (event) => dispatch(setPack(event.target.value)),
      addNewWordRequest: (payload) => dispatch(addNewWordRequest(payload)),
      removePackRequest: (payload) => dispatch(removePackRequest(payload)),
      updatePackRequest: (payload) => dispatch(updatePackRequest(payload)),
      removeWordRequest: (payload) => dispatch(removeWordRequest(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary)