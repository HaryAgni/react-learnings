import { FaApple } from "react-icons/fa6";
import {
  GiBanana,
  GiBerryBush,
  GiCherry,
  GiFruitBowl,
  GiGrapes,
  GiKiwiFruit,
  GiOrange,
  GiPeach,
  GiPineapple,
  GiStrawberry,
  GiWatermelon,
} from "react-icons/gi";
import { BiLemon } from "react-icons/bi";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    {
      name: "Apple",
      color: "-red-500",
      score: 7,
      fruit: FaApple,
    },
    {
      name: "Banana",
      color: "-yellow-500",
      score: 5,
      fruit: GiBanana,
    },
    {
      name: "Grapes",
      color: "-purple-500",
      score: 8,
      fruit: GiGrapes,
    },
    {
      name: "Orange",
      color: "-orange-500",
      score: 6,
      fruit: GiOrange,
    },
    {
      name: "Blueberry",
      color: "-blue-500",
      score: 9,
      fruit: GiBerryBush,
    },
    {
      name: "Lemon",
      color: "-yellow-300",
      score: 4,
      fruit: BiLemon,
    },
    {
      name: "Strawberry",
      color: "-red-400",
      score: 7,
      fruit: GiStrawberry,
    },
    {
      name: "Kiwi",
      color: "-green-500",
      score: 6,
      fruit: GiKiwiFruit,
    },
    {
      name: "Watermelon",
      color: "-green-600",
      score: 8,
      fruit: GiWatermelon,
    },
    {
      name: "Mango",
      color: "-yellow-600",
      score: 9,
      fruit: GiFruitBowl,
    },
    {
      name: "Pineapple",
      color: "-yellow-400",
      score: 7,
      fruit: GiPineapple,
    },
    {
      name: "Cherry",
      color: "-red-600",
      score: 5,
      fruit: GiCherry,
    },
    {
      name: "Peach",
      color: "-pink-400",
      score: 6,
      fruit: GiPeach,
    },
  ];

  const config = [
    {
      label: "Fruit",
      render: (fruit) => (
        <fruit.fruit className={`w-10 h-10 text${fruit.color}`} />
      ),
    },
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 bg${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
