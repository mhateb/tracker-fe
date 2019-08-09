import React, { memo } from "react";

import styles from "./button.scss";

const Button = (props) => {
    const {
        color,
        onClick,
        href = null,
        width = "auto",
        children
    } = props

    const cssStyles = {
        backgroundColor: color,
        width: width,
        color: color === "black" ? "white" : "black"
    }

    return (
        href ? (
            <div 
                className={styles["custom-link"]} 
                style={{...cssStyles}}
            >
                <a href={href}>{children}</a>
            </div>
        ) : (
            <button
                onClick={onClick}
                style={{...cssStyles}}
                className={styles["custom-button"]}
            >
                {children}
            </button>
        )
    )
}

export default memo(Button);