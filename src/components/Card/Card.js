import React from "react";
import "./Card.css";
import styles from "./Card.module.css";

console.log(styles);

export const ProductCard = (props) => {
    return (
        <div>
            <div className="card">
                <h1>{props.title ?? 'N/A'}</h1>
                <h2>{props.price ?? 'N/A'}</h2>
                <h3>{props.dedcription ?? 'N/A'}</h3>
                {/*?? undefined or null */}
            </div>
        0    <div className={styles.cardModule}>
                <h1>{props.title ?? 'N/A'}</h1>
                <h2>{props.price ?? 'N/A'}</h2>
                <h3>{props.dedcription ?? 'N/A'}</h3>
                {/*?? undefined or null */}
            </div>
        </div>
    )
}

export default ProductCard