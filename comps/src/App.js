import Dropdown from "./components/Dropdown";

function App() {
  const options = [{ label: "Red", value: "red" }, {label: "Green", value: "ged" }, {label: "Blue", value: "blue" }];

  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
}

export default App;
