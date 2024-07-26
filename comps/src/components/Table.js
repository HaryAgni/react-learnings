function Table({ data }) {
  const renderedRows = data.map((fruit) => {
    return (
      <tr className="border-b" key={fruit.name}>
        <td className="p-3" >{< fruit.fruit className= {`w-10 h-10 text${fruit.color}`} />}</td>
        <td className="p-3" >{fruit.name}</td>
        <td className="p-3" ><div className={`p-3 m-2 bg${fruit.color}`} ></div></td>
        <td className="p-3" >{fruit.score}</td>
      </tr>
    );
  });
  return (
    <table >
      <thead className="table-auto border-spacing-2" >
        <tr className="border-b-2" >
          <th>Fruit</th>
          <th>Name</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
