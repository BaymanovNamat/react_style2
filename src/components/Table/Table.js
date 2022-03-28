import "./Table.css";


function Table(props) {

  const tables = props.src.map((table) => (
    <tr>
      <td>
        {table[0]}
      </td>
      <td>
        {table[1]}
      </td>
      <td>
        {table[2]}
      </td>
    </tr>
  ));


  return (
    <table>
      {tables}
    </table>
  );
}

export default Table;