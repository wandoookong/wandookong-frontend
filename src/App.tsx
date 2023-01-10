import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import TeamRequestForm from "./pages/teamRequestForm/teamRequestForm";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/login";
import SignUp from "./pages/signUp/signUp";
import MyPage from "./pages/myPages/myPage/myPage";
import MyProfileEdit from "./pages/myPages/myProfileEdit/MyProfileEdit";
import MyCurrentCreatedTeam from "./pages/myPages/myCurrentCreatedTeam/myCurrentCreatedTeam";
import { TeamDetail } from "./pages/teamDetail/teamDetail";
import ApplyTeam from "./pages/teamDetail/applyTeam";
import MyJoinedTeams from "./pages/myPages/myJoinedTeams/MyJoinedTeams";
import MyTeamHistoryPage from "./pages/myPages/myTeamHistoryPage/MyTeamHistoryPage";
import ConditionTerms from "./pages/terms/conditionTerms";
import PrivacyTerms from "./pages/terms/privacyTerms";
import RequireAuth from "./pages/configuration/requireAuth";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<RequireAuth />}>
          <Route path="team/:teamId/apply" element={<ApplyTeam />} />
          <Route path="request" element={<TeamRequestForm />} />
          <Route path="myAccount" element={<MyPage />} />
          <Route path="my-profile" element={<MyProfileEdit />} />
          <Route path="myCreatedTeam" element={<MyCurrentCreatedTeam />} />
          <Route path="my-team-history" element={<MyTeamHistoryPage />} />
          <Route path="my-team-party" element={<MyJoinedTeams />} />
        </Route>
        <Route path="/privacy" element={<PrivacyTerms />} />
        <Route path="/terms" element={<ConditionTerms />} />
        <Route path="/team/:teamId" element={<TeamDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
