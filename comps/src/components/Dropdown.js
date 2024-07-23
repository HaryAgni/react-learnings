import { useState } from "react";

function Dropdown({ options }) {
const [isOpen, setIsOpen] = useState(false);
const [color,setColor] = useState('Select...');

const handleOptionClick = (options) =>{
    setColor(options.label)
    setIsOpen(false);
}

const renderedOptions = options.map((options) =>{
    return isOpen && <div onClick={()=>handleOptionClick(options)} key={options.value}>{options.label}</div>
});

const handleClick = () =>{
    setIsOpen(!isOpen);
}

  return (
    <div>
      <div onClick={handleClick}>{color}</div>
      <div>{renderedOptions}</div>
    </div>
  );
}

export default Dropdown;
