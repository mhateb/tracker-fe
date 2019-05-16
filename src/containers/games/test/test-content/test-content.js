import React, {memo} from 'react';

import styles from './test-content.scss';

class TestContent extends React.PureComponent {
    state = {
        active: false,
        selectedIndexVariant: null
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

    getAnswer = (index) => {
        const { setNext } = this.props

        if (!this.state.active) {
            this.setState({active: true, selectedIndexVariant: index})
            setTimeout(() => {
                setNext()
                this.setState({active: false, selectedIndexVariant: null})
            }, 1500)
        }
    }

    getVariantItem = (variant, index) => {
        return (
            <div key={index} onClick={() => this.getAnswer(index)} className={this.getClassName(variant, index)}>
                <span>{variant.word}</span>
            </div>
        )
    }

    render () {
        const { variants } = this.props

        console.log(variants)

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