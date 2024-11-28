import React, { Profiler } from "react";

import {Route,Routes } from "react-router-dom";
import Tables from "../Pages/Tables";
import Billing from "../Pages/Billing";

import Dashboard from "../Pages/Dashboard"
import Profile from "../Pages/Profile";
import Rtl from "../Pages/Rtl";
import Signin from "../Pages/Signin"
import Signup from "../Pages/Signup"
import Virtualreality from "../Pages/Virtualreality"

const Routing = () => {
  return<>
    <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/tables" element={ <Tables/> }/>
        <Route path="/billing" element={<Billing/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/rtl" element={<Rtl/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/virtualreality" element={<Virtualreality/>}/>
    </Routes>
  </>
};

export default Routing;
