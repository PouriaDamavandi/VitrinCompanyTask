const ListItem = (props) => {
  return (
    <div>
      
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
};

export default ListItem;
