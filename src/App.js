import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import ProjectDetails from "./components/projects/ProjectDetails";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App teal lighten-4">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
