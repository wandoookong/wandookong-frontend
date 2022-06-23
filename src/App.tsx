import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import RequestForm from "./pages/requestForm/requestForm";
import NotFound from "./pages/not-found/NotFound";

function App() {
  return (
    <BrowserRouter>
      {/*<GeneralNavigation />*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<RequestForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
