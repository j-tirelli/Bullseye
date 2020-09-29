import React from 'react';
import styles from './Styles.jsx';

const Dot = ({selected, handleClick}) => (
    selected ?
    <styles.selectedDot></styles.selectedDot> :
    <styles.dot onClick={() => handleClick()}></styles.dot>
);


export default Dot;
