import React, {memo, useState} from 'react';
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
        VariantsGenerator: VariantsGenerator(this.props.selectedPack && this.props.selectedPack.words),
        isEnd: false,
        isStart: true,
        variants: {
            words: []
        },
        result: {
            trueAnswers: 0,
            falseAnswers: 0
        }
    }

    setResult = (result) => {
        this.setState({result: result})
    }

    getVariants = () => {
        const variants = this.state.VariantsGenerator.next()

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
                <TestEnd 
                    result={this.state.result}
                />
            )
        } else {
            return (
                <TestContent 
                    setNext={this.setNext}
                    variants={this.state.variants} 
                    result={this.state.result}
                    setResult={this.setResult}
                />
            )
        }
    }

    render () {
        const {selectedPack} = this.props

        if (!selectedPack) {
            location.href = "/training"
        }

        return (
            selectedPack && selectedPack.words.length > 15 ? (
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