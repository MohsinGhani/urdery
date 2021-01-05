import React from "react";
import { Nav } from "react-bootstrap";
import Logo from "../../../assets/images/main-logo.png";
import { NavLink } from "react-router-dom";
import Dashboard from "../../../assets/icons/dashboard.png";
import Delivery from "../../../assets/icons/delivery.png";
import CRM from "../../../assets/icons/crm.png";
import Carryout from "../../../assets/icons/carryout.png";
import Discount from "../../../assets/icons/discount.png";
import Hours from "../../../assets/icons/hours.png";
import Order from "../../../assets/icons/order.png";
import Report from "../../../assets/icons/report.png";

const AdminLeftPannel = (props) => {
  return (
    <div className="admin-left-pannel-container">
      <NavLink
        to="/"
        strict
        activeClassName="active-side-nav"
        className="side-nav-text"
      >
        <img src={Logo} alt="" className="main-logo" />
      </NavLink>

      <Nav className="col-md-12 d-none d-md-block mr-auto">
        {sideNavItems.map((item, key) => (
          <Nav.Item key={key} className="side-nav-container">
            <NavLink
              exact
              to={item.route}
              strict
              activeClassName="active-side-nav"
              className="side-nav-text"
            >
              <img src={item.icon} alt="tab icon" className="side-nav-icon" />
              {item.title}
            </NavLink>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};
export default AdminLeftPannel;

const sideNavItems = [
  {
    title: "Dashboard",
    route: "/admin/dashboard",
    icon: Dashboard,
  },
  {
    title: "Orders",
    route: "/admin/orders",
    icon: Order,
  },
  {
    title: "Hours",
    route: "/admin/hours",
    icon: Hours,
  },

  {
    title: "Reports",
    route: "/admin/reports",
    icon: Report,
  },
  {
    title: "Discounts",
    route: "/admin/discounts",
    icon: Discount,
  },
  {
    title: "CRM",
    route: "/admin/CRM",
    icon: CRM,
  },
  {
    title: "Carryout Settings",
    route: "/admin/carryout_settings",
    icon: Carryout,
  },
  {
    title: "Delivery Settings",
    route: "/admin/delivery_settings",
    icon: Delivery,
  },
];
