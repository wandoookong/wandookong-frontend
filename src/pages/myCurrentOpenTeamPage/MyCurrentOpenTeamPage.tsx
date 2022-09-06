import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import { CurrentOpenTeamReturnType } from "../../api/types/teamType";
import MyTeamApi from "../../api/myTeamApi";
import TeamMemberApi from "../../api/teamMemberApi";
import { AllowMemberListReturnType, ApplyMemberListReturnType } from "../../api/types/teamMemberType";
import ApplyMemberContainer from "./ApplyMemberContainer";
import AllowMemberContainer from "./AllowMemberContainer";

export type PageModeType = "apply" | "allow";

export default function MyCurrentOpenTeamPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [pageMode, setPageMode] = useState<PageModeType>("apply");
  const [currentOpenTeam, setCurrentOpenTeam] = useState({} as CurrentOpenTeamReturnType);
  const [applyMemberList, setApplyMemberList] = useState({} as ApplyMemberListReturnType);
  const [allowMemberList, setAllowMemberList] = useState({} as AllowMemberListReturnType);

  useEffect(() => {
    Promise.all([MyTeamApi.getCurrentOpenTeam(), TeamMemberApi.getApplyMemberList()])
      .then(([currentOpenTeamRes, applyMemberListRes]) => {
        setCurrentOpenTeam(currentOpenTeamRes);
        setApplyMemberList(applyMemberListRes);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onClickTab = (e, pageMode: PageModeType) => {
    e.preventDefault();

    setPageMode(pageMode);

    if (pageMode === "apply") {
      getApplyList();
    } else {
      getAllowList();
    }
  };

  const getApplyList = () => {
    setIsLoading(true);
    TeamMemberApi.getApplyMemberList()
      .then((res) => {
        setApplyMemberList(res);
      })
      .finally(() => setIsLoading(false));
  };

  const getAllowList = () => {
    setIsLoading(true);
    TeamMemberApi.getAllowMemberList()
      .then((res) => {
        setAllowMemberList(res);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Layout>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <div>
            <div>{currentOpenTeam.teamCategory === "portfolio" ? "포트폴리오" : "사이드 프로젝트"}</div>
            <div>{currentOpenTeam.closeDueYmd}</div>
            <div>{currentOpenTeam.title}</div>
          </div>
          <div>
            <button onClick={(e) => onClickTab(e, "apply")}>신청자</button>
            {pageMode === "apply" && <div>----</div>}
            <button onClick={(e) => onClickTab(e, "allow")}>참여자</button>
            {pageMode === "allow" && <div>----</div>}
          </div>
          <>
            {pageMode === "apply" ? (
              applyMemberList.list.map((applyMember) => <ApplyMemberContainer {...applyMember} />)
            ) : pageMode === "allow" ? (
              allowMemberList.list.map((allowMember) => <AllowMemberContainer {...allowMember} />)
            ) : (
              <div>404</div>
            )}
          </>
        </>
      )}
    </Layout>
  );
}
