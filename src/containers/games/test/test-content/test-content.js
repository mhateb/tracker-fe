import React, {memo} from 'react';

import styles from './test-content.scss';

class TestContent extends React.PureComponent {
    state = {
        active: false,
        selectedIndexVariant: null,
        isBlock: false
    }

    getClassName = (variant, index) => {
        const result = [styles["variant-item"]]
        if (this.state.active) {
            if (variant.isTrueAnswer) {
                result.push(styles["green"])
            } else {
                result.push(styles["red"])
            }
        } 

        if (this.state.selectedIndexVariant === index) {
            if (variant.isTrueAnswer) {
                result.push(styles["back-green"])
            } else {
                result.push(styles["back-red"])
            }
        }

        return result.join(' ')
    }

    getAnswer = (variant, index) => {
        const { setNext, result, setResult } = this.props

        if (variant.isTrueAnswer) {
            setResult({...result, trueAnswers: result.trueAnswers + 1})
        } else {
            setResult({...result, falseAnswers: result.falseAnswers + 1})
        }

        if (!this.state.active) {
            this.setState({active: true, selectedIndexVariant: index, isBlock: true})
            setTimeout(() => {
                setNext()
                this.setState({active: false, selectedIndexVariant: null, isBlock: false})
            }, 1500)
        }
    }

    getVariantItem = (variant, index) => {
        return (
            <button disabled={this.state.isBlock} key={index} onClick={() => this.getAnswer(variant, index)} className={this.getClassName(variant, index)}>
                <span>{variant.word}</span>
            </button>
        )
    }

    render () {
        const { variants } = this.props

        return (
            <section className={styles["test-content-container"]}>
                <h1>{variants.word}</h1>
                <div className={styles["block-variants"]}>
                    {
                        variants.variants.map((variant, index) => this.getVariantItem(variant, index))
                    }
                </div>
            </section>
        )
    }
}

export default memo(TestContent)