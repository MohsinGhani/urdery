import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";
import AdminLeftPannel from "./AdminLeftPannel";
import {
  Dashboard,
  Orders,
  Hours,
  Reports,
  Discounts,
  CRM,
  CarryoutSettings,
  DeliverySettings,
} from "./AdminPages";

const AdminDashboard = (props) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={4} lg={3} xl={2} id="sidebar-wrapper">
            <AdminLeftPannel />
          </Col>
          <Col md={8} lg={9} xl={10} id="page-content-wrapper">
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route path="/admin/orders" component={Orders} />
            <Route path="/admin/hours" component={Hours} />
            <Route path="/admin/reports" component={Reports} />
            <Route path="/admin/discounts" component={Discounts} />
            <Route path="/admin/CRM" component={CRM} />
            <Route
              path="/admin/carryout_settings"
              component={CarryoutSettings}
            />
            <Route
              path="/admin/delivery_settings"
              component={DeliverySettings}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AdminDashboard;
