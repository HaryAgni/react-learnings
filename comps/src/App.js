import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [value, setValue] = useState(null);
  const handleChange = (option) => {
    setValue(option);
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "ged" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div>
      <Dropdown options={options} value={value} onChange={handleChange} />
    </div>
  );
}

export default App;
