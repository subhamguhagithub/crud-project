import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ViewData from "./pages/ViewData";
import AddData from "./pages/AddData";

import "./App.css";
import EditData from "./pages/EditData";

function App() {
  return (
    <div className="app-wrapper">

      <BrowserRouter>

        {/* Top Button */}
        <Link to="/add" className="add-btn">
          + Add Student
        </Link>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<ViewData />} />
          <Route path="/add" element={<AddData />} />
          <Route path="/edit/:id" element={<EditData/>}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
