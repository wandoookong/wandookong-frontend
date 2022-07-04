import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import RequestForm from "./pages/requestForm/requestForm";
import NotFound from "./pages/not-found/NotFound";
import GeneralNavigation from "./components/Navigation/generalNavigation";
import Login from "./pages/Login/login";
import SignUp from "./pages/SignUp/signUp";

function App() {
  return (
    <BrowserRouter>
      <GeneralNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/request" element={<RequestForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
