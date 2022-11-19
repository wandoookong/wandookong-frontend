import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import TeamRequestForm from "./pages/teamRequestForm/teamRequestForm";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/login";
import SignUp from "./pages/signUp/signUp";
import MyPage from "./pages/myPages/myPage/myPage";
import MyProfilePage from "./pages/myPages/myProfilePage/MyProfilePage";
import MyCurrentOpenTeamPage from "./pages/myPages/myCurrentOpenTeamPage/myCurrentOpenTeamPage";
import MyTeamHistoryPage from "./pages/myPages/myTeamHistoryPage/MyTeamHistoryPage";
import { TeamDetail } from "./pages/teamDetail/teamDetail";
import ApplyTeam from "./pages/teamDetail/applyTeam/applyTeam";
import Terms from "./pages/policy/terms";
import PrivacyInfo from "./pages/policy/privacyInfo";
import MyJoinedTeams from "./pages/myPages/myJoinedTeams/MyJoinedTeams";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/team/:teamId/apply" element={<ApplyTeam />} />
        <Route path="/team/:teamId" element={<TeamDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-info" element={<PrivacyInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/request" element={<TeamRequestForm />} />
        <Route path="/myAccount" element={<MyPage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
        <Route path="/my-current-open" element={<MyCurrentOpenTeamPage />} />
        <Route path="/my-team-history" element={<MyTeamHistoryPage />} />
        <Route path="/my-team-party" element={<MyJoinedTeams />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
