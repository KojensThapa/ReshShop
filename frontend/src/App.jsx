import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout";
import Home from "./Pages/Home";
import {Toaster} from "sonner"
const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* user routes */}
          <Route index element={<Home />}></Route>
        </Route>
        <Route>{/* Admin routes */}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
