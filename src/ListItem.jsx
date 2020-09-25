import React from 'react';

const ListItem = ({item}) => {

  let handleClick = (event) => {
    console.log(`item ${item.title} was clicked!`);
    // I'm planning to use this to redirect page on click
  };

  return (
    <li onClick={(e) => {handleClick(e)}}>
      <a href={item.productUrl}>
        <img src={item.imageUrl} ></img>
        <p className="item-price">{item.price}</p>
        <p className="item-title">{item.title}</p>
      </a>
    </li>
  );
};

export default ListItem;
