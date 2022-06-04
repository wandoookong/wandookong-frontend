import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import GeneralNavigation from "./components/Navigation/generalNavigation";
import RequestForm from "./pages/requestForm";

function App() {
  return (
    <BrowserRouter>
      <GeneralNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<RequestForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
