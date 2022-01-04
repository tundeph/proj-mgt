import React from "react";
import Notifications from "./Notifications";

const Dashboard = () => {
  return (
    <div className="dashboard container">
      <div className="col s12 m6"> </div>
      <div className="col s12 m5 offset-m1">
        <Notifications />
      </div>
    </div>
  );
};

export default Dashboard;
