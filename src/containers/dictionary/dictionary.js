import React from 'react';
import { connect } from 'react-redux';

import DictionaryHeader from './dictionary-header/dictionary-header';
import DictionaryContent from './dictionary-content/dictionary-content';

import styles from './dictionary.scss';

class Dictionary extends React.PureComponent {
  state = {
    isAnyPacks: !!this.props.packs
  }

  render () {
    const { packs, selectedPack } = this.props

    return (
      <section className={styles["dictionary-container"]}>
        <DictionaryHeader packs={packs} />
        <DictionaryContent packs={packs} />
      </section>
    )
  }
};

function mapStateToProps(state) {
  const { packs } = state

  return { 
    selectedPack: packs.selectedPack,
    packs: packs.items
  }
}

export default connect(mapStateToProps)(Dictionary)