import Table from "./Table";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, setSortColumn, sortedData } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <IoMdArrowDropup />
        <IoMdArrowDropdown />
      </div>
    );
  }

  if (sortOrder == null) {
    return (
      <div>
        <IoMdArrowDropup />
        <IoMdArrowDropdown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <IoMdArrowDropup />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <IoMdArrowDropdown />
      </div>
    );
  }
}

export default SortableTable;
