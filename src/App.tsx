import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import RequestForm from "./pages/requestForm/requestForm";
import NotFound from "./pages/not-found/NotFound";
import Login from "./pages/login/login";
import SignUp from "./pages/signUp/signUp";
import MyPage from "./pages/myPage/MyPage";
import MyProfilePage from "./pages/myProfilePage/MyProfilePage";
import MyCurrentOpenTeamPage from "./pages/myCurrentOpenTeamPage/MyCurrentOpenTeamPage";
import MyTeamHistoryPage from "./pages/myTeamHistoryPage/MyTeamHistoryPage";
import MyTeamPartyPage from "./pages/myTeamPartyPage/MyTeamPartyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/request" element={<RequestForm />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
        <Route path="/my-current-open" element={<MyCurrentOpenTeamPage />} />
        <Route path="/my-team-history" element={<MyTeamHistoryPage />} />
        <Route path="/my-team-party" element={<MyTeamPartyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
