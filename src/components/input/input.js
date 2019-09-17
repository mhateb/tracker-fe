import React from "react";

import styles from "./input.scss";

const Input = (props) => {
    const {
        width,
        placeholder,
        type,
        name,
        value,
        onChange,
        ...otherProps
    } = props

    return (
        <div className={styles.root}>
            <input 
                style={{ width: width }}
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                {...otherProps}
            />
        </div>
    )
}

export default Input