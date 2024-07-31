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
      color: "text-red-500",
      bgColor: "bg-red-500",
      score: 7,
      fruit: FaApple,
    },
    {
      name: "Banana",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400",
      score: 5,
      fruit: GiBanana,
    },
    {
      name: "Grapes",
      color: "text-green-300",
      bgColor: "bg-green-300",
      score: 8,
      fruit: GiGrapes,
    },
    {
      name: "Orange",
      color: "text-orange-500",
      bgColor: "bg-orange-500",
      score: 6,
      fruit: GiOrange,
    },
    {
      name: "Blueberry",
      color: "text-blue-500",
      bgColor: "bg-blue-500",
      score: 9,
      fruit: GiBerryBush,
    },
    {
      name: "Lemon",
      color: "text-yellow-300",
      bgColor: "bg-yellow-300",
      score: 4,
      fruit: BiLemon,
    },
    {
      name: "Strawberry",
      color: "text-red-400",
      bgColor: "bg-red-400",
      score: 7,
      fruit: GiStrawberry,
    },
    {
      name: "Kiwi",
      color: "text-green-400",
      bgColor: "bg-green-400",
      score: 6,
      fruit: GiKiwiFruit,
    },
    {
      name: "Watermelon",
      color: "text-green-600",
      bgColor: "bg-green-600",
      score: 8,
      fruit: GiWatermelon,
    },
    {
      name: "Mango",
      color: "text-yellow-600",
      bgColor: "bg-yellow-600",
      score: 9,
      fruit: GiFruitBowl,
    },
    {
      name: "Pineapple",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400",
      score: 7,
      fruit: GiPineapple,
    },
    {
      name: "Cherry",
      color: "text-red-600",
      bgColor: "bg-red-600",
      score: 5,
      fruit: GiCherry,
    },
    {
      name: "Peach",
      color: "text-pink-400",
      bgColor: "bg-pink-400",
      score: 6,
      fruit: GiPeach,
    },
  ];

  const config = [
    {
      label: "Fruit",
      render: (fruit) => (
        <fruit.fruit className={`w-10 h-10 ${fruit.color}`} />
      ),
    },
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.bgColor}`}></div>,
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
