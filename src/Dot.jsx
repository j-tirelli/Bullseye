import React from 'react';
import styles from './Styles.jsx';

const Dot = ({selected, key, handleClick}) => (
    selected ?
    <styles.selectedDot></styles.selectedDot> :
    <styles.dot onClick={() => handleClick(key)}></styles.dot>
);


export default Dot;
