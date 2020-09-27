import React from "react";
import styles from './Mediumlink.module.css'

const MediumLink = ({href}) => {
    return (
        <a href={href} className={styles.mediumLink}>
            <i className="fab fa-medium"/>
            <span>Medium Article</span>
        </a>
    )
}

export default MediumLink;
