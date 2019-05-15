import React, {memo} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import TestEmpty from './test-empty/test-empty';
import VariantsGenerator from '../utils/variants';

import styles from './test.scss';

class Test extends React.PureComponent {    
    state = {
        VariantsGenerator: VariantsGenerator(this.props.selectedPack.words),
        isEnd: false
    }

    getVariants = () => {
        const variants = this.state.VariantsGenerator.next()
        if (variants.done) {
            this.setState({isEnd: true})
            return
        } else {
            console.log(variants.value)
            return variants.value
        }
    }

    render () {
        const {selectedPack} = this.props

        return (
            <section>
                <button onClick={this.getVariants}>GET WORDS</button>
            </section>
        )
    }
}

function mapStateToProps(state) {
    const { packs } = state
  
    return { 
      selectedPack: packs.selectedPack
    }
  }
  

export default compose(
    memo,
    connect(
        mapStateToProps,
        null
    )
)(Test)