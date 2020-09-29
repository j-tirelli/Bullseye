import React from 'react';
import styles from './Styles.jsx';

const Dot = ({selected}) => (
  selected ?
  <styles.selectedDot></styles.selectedDot> :
  <styles.dot></styles.dot>
);


export default Dot;
