import React from "react";
import BellIcon from "../../../assets/icons/bell.png";
import Avatar from "../../../assets/icons/avater.jpg";
import DownArrow from "../../../assets/icons/arrow-back.png";
import InputField from "../../../common/InputField";
import { Button, Table } from "react-bootstrap";
import Barchart from "../Barchart";
import StarRating from "../StarRating";
import ProgressBarTable from "../ProgressBarTable";
import RankingTable from "../RankingTable";
import SuccessDot from "../../../assets/icons/ellipse-success.png";
import WarningDot from "../../../assets/icons/ellipse-warning.png";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <section className="dashboard-header-section">
        <h1 className="welcome-text">Hi Claus, Welcome Back</h1>
        <div className="header-section-profile">
          <img src={BellIcon} alt="bell icon" className="bell-icon" />
          <p className="profile-name">Claus Montan</p>
          <img src={Avatar} alt="bell icon" className="avtar-icon" />
          <img src={DownArrow} alt="bell icon" className="down-icon" />
        </div>
      </section>
      <section className="dashboard-search-section">
        <h1 className="search-text">Active Orders</h1>
        <div>
          <InputField type="text" placeholder="Search" />
        </div>
      </section>
      <Table responsive className="order-table">
        <thead>
          <tr>
            {activeTableHeading.map((item, key) => (
              <th key={key} className="table-heading">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {activeTableDetails.map((item, key) => (
            <tr key={key}>
              <td className="table-data">{item.orderNo}</td>
              <td className="table-data">{item.productName}</td>
              <td className="table-data">{item.customerName}</td>
              <td className="table-data">{item.totalPrice}</td>
              <td className="table-data">...</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <section className="product-graph-view-container">
        <div className="sales-card">
          <div className="sales-card-header">
            <p className="sales-heading">Todays Sales</p>
            <p className="sales-detail">Total 4 Items</p>
          </div>
          <ul className="product-list">
            <li>
              <img src={WarningDot} className="dot-icon" alt="dot icon" />
              <p className="product-title">Pizza</p>
            </li>
            <li>
              <img src={WarningDot} className="dot-icon" alt="dot icon" />
              <p className="product-title">Gift Card</p>
            </li>
            <li>
              <img src={SuccessDot} className="dot-icon" alt="dot icon" />
              <p className="product-title">T-Shirt</p>
            </li>
            <li>
              <img src={SuccessDot} className="dot-icon" alt="dot icon" />
              <p className="product-title">Hoodie</p>
            </li>
          </ul>
          <div className="sales-btn-container">
            <Button variant="outline-primary" className="sales-btn">
              <img src={WarningDot} className="dot-icon" alt="dot icon" />
              <p className="product-title">In Progress</p>
            </Button>
            <Button variant="outline-primary" className="sales-btn">
              <img src={SuccessDot} className="dot-icon" alt="dot icon" />
              <p className="product-title">Completed</p>
            </Button>
          </div>
        </div>
        <div className="order-card">
          <div className="order-card-header">
            <p className="order-heading">Number of Orders</p>
            <div className="order-details-section">
              <p className="order-detail">Today</p>
              <p className="order-detail">Week</p>
              <p className="order-detail">Month</p>
              <p className="order-detail">Year</p>
            </div>
          </div>
          <div className="order-card-chart-container">
            <Barchart />
            <div className="order-card-chart-right-text">
              <div className="order-card-text-section">
                <p className="order-card-primary-text">Total Order</p>
                <p className="order-card-secondary-text">1289</p>
              </div>
              <div className="order-card-text-section">
                <p className="order-card-primary-text">Progress</p>
                <p className="order-card-secondary-text">76%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="customer-rating-container">
        <div className="customer-rating-card">
          <div className="customer-rating-card-header">
            <p className="customer-rating-heading">Customers Raitings</p>
            <p className="customer-rating-detail">Customers Raitings</p>
          </div>
          <StarRating ratingStar={3.5} />

          {progressBarData.map((item, key) => (
            <ProgressBarTable
              key={key}
              starNumber={item.starNumber}
              progrssBarNumber={item.progrssBarNumber}
            />
          ))}
        </div>
        <div className="customer-progress-card">
          <RankingTable />
        </div>
      </section>
      <section className="in-active-container">
        <h1 className="in-active-text">In-Active Items</h1>
        <Table responsive className="order-table">
          <thead>
            <tr>
              {inActiveTableHeading.map((item, key) => (
                <th key={key} className="table-heading">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {inActiveTableDetails.map((item, key) => (
              <tr key={key}>
                <td className="table-data">{item.productName}</td>
                <td className="table-data">{item.customerName}</td>
                <td className="table-data">{item.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
      <section>{/* <Barchart data={barData} /> */}</section>
    </div>
  );
};

export default Dashboard;

const progressBarData = [
  {
    starNumber: 5,
    progrssBarNumber: 2,
  },
  {
    starNumber: 4,
    progrssBarNumber: 43,
  },
  {
    starNumber: 3,
    progrssBarNumber: 15,
  },
  {
    starNumber: 2,
    progrssBarNumber: 11,
  },
  {
    starNumber: 1,
    progrssBarNumber: 19,
  },
];

const activeTableDetails = [
  {
    orderNo: "#DO-00003",
    productName: "Pizza",
    customerName: "Muhammed Ali",
    totalPrice: "$1009",
  },
  {
    orderNo: "#DO-00004",
    productName: "T-shirt, Shoes",
    customerName: "Jail Kordat",
    totalPrice: "$220",
  },
  {
    orderNo: "#DO-00005",
    productName: "Gift Card",
    customerName: "Dua Dilpa",
    totalPrice: "$350",
  },
  {
    orderNo: "#DO-00006",
    productName: "Gift Card",
    customerName: "Giannis Ou",
    totalPrice: "$987",
  },
];

const activeTableHeading = [
  "Order #",
  "Product Name",
  "Customer Name",
  "Total Price",
  "",
];

const inActiveTableHeading = ["Product Name", "Customer Name", "Total Price"];
const inActiveTableDetails = [
  {
    productName: "Pizza",
    customerName: "Muhammed Ali",
    totalPrice: "$1009",
  },
  {
    productName: "T-shirt, Shoes",
    customerName: "Jail Kordat",
    totalPrice: "$220",
  },
  {
    productName: "Gift Card",
    customerName: "Dua Dilpa",
    totalPrice: "$350",
  },
  {
    productName: "Gift Card",
    customerName: "Giannis Ou",
    totalPrice: "$987",
  },
];
