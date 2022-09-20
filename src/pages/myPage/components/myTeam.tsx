import React, { ChangeEvent, useContext, useState } from "react";
import { MyPageContext } from "../MyPage";
import { useNavigate } from "react-router-dom";
import { TEAM_CATEGORY } from "../../../api/types/fieldType";

export default function MyTeam() {
  const navigate = useNavigate();

  return (
    <>
      <CurrentOpenTeam />
      <div>
        <a onClick={() => navigate("/my-team-history")}>내가 만든 완두콩 모두 보기</a>
      </div>
      <div>
        <a onClick={() => navigate("/my-team-party")}>참여한 완두콩 보기</a>
      </div>
    </>
  );
}

function CurrentOpenTeam() {
  const { isLoading, currentOpenTeam } = useContext(MyPageContext);

  return isLoading ? (
    <div>loading...</div>
  ) : currentOpenTeam ? (
    <>
      <div>{teamCategoryText(currentOpenTeam.teamCategory)}</div>
      <div>{currentOpenTeam.closeDueYmd}</div>
      <div>{currentOpenTeam.title}</div>
      <div>
        {currentOpenTeam.applyCount}
        신청자
      </div>
      <div>
        {currentOpenTeam.allowCount}/{currentOpenTeam.capacityCount}
        참여자
      </div>
    </>
  ) : null;
}

function teamCategoryText(teamCategory: TEAM_CATEGORY) {
  switch (teamCategory) {
    case "portfolio":
      return "포트폴리오";
    case "side_project":
      return "사이드프로젝트";
  }
}
