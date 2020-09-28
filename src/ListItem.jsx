import React from 'react';
import styles from './Styles.jsx';

const ListItem = ({item}) => {

  let handleClick = (event) => {
    console.log(`item ${item.title} was clicked!`);
    // I'm planning to use this to redirect page on click
  };

  return (
    <styles.li onClick={(e) => {handleClick(e)}}>
      <a href={item.productUrl}>
        <styles.img src={item.imageUrl} ></styles.img>
        <styles.price className="item-price">{item.price}</styles.price>
        <styles.title className="item-title">{item.title}</styles.title>
      </a>
    </styles.li>
  );
};

export default ListItem;
