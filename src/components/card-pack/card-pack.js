import React, { memo } from "react";

import Button from "components/button/button";

import styles from "./card-pack.scss";

const CardPack = (props) => {

    return (
        <div className={styles["card-container"]}>
            <img src="http://placehold.it/150" />
            <div className={styles["card-titles"]}>
                <h1>Card title</h1>
                <h3>Card subtitle</h3>
            </div>
            <div className={styles["card-content"]}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas molestie vitae lacus ut feugiat.
                    Donec nisl purus, blandit quis neque vel, mattis consequat eros. 
                </p>
            </div>
            <div className={styles["card-controls"]}>
                <Button 
                    color="yellow"
                    width="90px"
                >
                    Action
                </Button>
            </div>
        </div>
    )
}

export default memo(CardPack);