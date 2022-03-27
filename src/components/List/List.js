import "./List.css";


function List(props) {

  const List = props.src.map((item) => <li>{item}</li>);


  return (
    <ul className="List">
      {List}
    </ul>
  );
}


export default List;