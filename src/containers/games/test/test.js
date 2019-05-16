import React, {memo} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import TestEmpty from './test-empty/test-empty';
import TestContent from './test-content/test-content';
import TestStart from './test-start/test-start';
import TestEnd from './test-end/test-end';
import VariantsGenerator from '../utils/variants';

import styles from './test.scss';

class Test extends React.PureComponent {    
    state = {
        VariantsGenerator: VariantsGenerator(this.props.selectedPack.words),
        isEnd: false,
        isStart: true,
        variants: {}
    }

    getVariants = () => {
        const variants = this.state.VariantsGenerator.next()
        console.log(variants)
        if (variants.done) {
            this.setState({isEnd: true})
            return false
        } else {
            return variants.value
        }
    }

    setStart = () => {
        this.setState({ isStart: false })
        this.setState({ variants: this.getVariants()})
    }

    setNext = () => {
        this.setState({ variants: this.getVariants() })
    }

    getTestContent = () => {
        if (this.state.isStart) {
            return (
                <TestStart setStart={this.setStart} />
            )
        } else if (this.state.isEnd) {
            return (
                <TestEnd />
            )
        } else {
            return (
                <TestContent setNext={this.setNext} variants={this.state.variants} />
            )
        }
    }

    render () {
        const {selectedPack} = this.props

        return (
            selectedPack.words.length > 15 ? (
                this.getTestContent()
            ) : (
                <TestEmpty />
            )
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