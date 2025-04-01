import React from "react";

import { Route, Routes } from "react-router-dom";
import Tables from "../Pages/Tables";
import Billing from "../Pages/Billing";
import Dashboard from "../Pages/Dashboard";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";


const Routing = () => {
  return <>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </>
};

export default Routing;
