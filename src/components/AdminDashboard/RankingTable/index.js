import React from "react";
import { ProgressBar, Table } from "react-bootstrap";

const RankingTable = () => {
  return (
    <Table responsive className="ranking-table">
      <thead>
        <tr>
          {tableHeading.map((item, key) => (
            <th key={key} className="table-heading">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, key) => (
          <tr key={key}>
            <td className="table-data">{item.productName}</td>
            <td className="table-data">
              <ProgressBar
                now={item.itemOrders}
                max={item.itemOrders}
                style={{ width: `${item.itemOrders}%` }}
                variant="success"
              />
            </td>
            <td className="table-data">{item.percentage} %</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RankingTable;

const tableHeading = ["Product Name", "Items Orders Ranking", "Percentage"];
const tableData = [
  {
    productName: "Odrering",
    itemOrders: 100,
    percentage: 100,
  },
  {
    productName: "Something",
    itemOrders: 67,
    percentage: 67,
  },
  {
    productName: "Catering",
    itemOrders: 79,
    percentage: 79,
  },
  {
    productName: "T shirt",
    itemOrders: 22,
    percentage: 22,
  },
  {
    productName: "Gift Card",
    itemOrders: 46,
    percentage: 46,
  },
];
