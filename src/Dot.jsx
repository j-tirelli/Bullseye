import React from 'react';
import styles from './Styles.jsx';

const Dot = ({selected, handleClick}) => (
    selected ?
    <styles.selectedDot></styles.selectedDot> :
    <styles.dotBox className='box-for-a-dot' onClick={() => handleClick()}><styles.dot></styles.dot></styles.dotBox>
);


export default Dot;
