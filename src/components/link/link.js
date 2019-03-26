import React, {PureComponent} from 'react'
import {Link as ReactLink} from 'react-router-dom'

class Link extends PureComponent {
    constructor() {
        super(props)
    }

    getContent = () => {
        const {title} = this.props

        return(
            <span>{title}</span>
        )
    }

    renderLink = () => {
        const {className, url} = this.props

        return (
            <ReactLink
                className={className}
                to={url}
            >
                {
                    this.getContent()
                }
            </ReactLink>
        )    
    } 

    renderAnchor = () => {
        const {url, target, onClick} = this.props

        return(
            <span
                onClick={onClick}
                target={target}
                href={url}
                className={className}
            >
                {
                    this.getContent()
                }
            </span>
        )
    }

    render() {
        const {type} = this.props

        switch(type) {
            case 'anchor':
                this.renderAnchor()
                break
            case 'router':
                this.renderLink()
                break
        }
    }
}

export default Link