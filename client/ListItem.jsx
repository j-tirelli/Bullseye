const ListItem = ({item}) => (
  <li>
    <a href={item.productUrl}>
      <img src={item.imageUrl} ></img>
      <p className="item-price">{item.price}</p>
      <p className="item-title">{item.title}</p>
    </a>
  </li>
);

export default ListItem;
