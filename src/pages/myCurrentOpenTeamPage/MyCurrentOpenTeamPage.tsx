import { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import { CurrentOpenTeamReturnType } from "../../api/types/teamType";
import MyTeamApi from "../../api/myTeamApi";
import TeamMemberApi from "../../api/teamMemberApi";
import { AllowMemberListReturnType, ApplyMemberListReturnType } from "../../api/types/teamMemberType";
import ApplyMemberContainer from "./ApplyMemberContainer";
import AllowMemberContainer from "./AllowMemberContainer";
import Header from "./components/Header";
import MyTeamInfo from "./components/MyTeamInfo";
import TabBar from "./components/TabBar";

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
          <Header />
          <MyTeamInfo {...currentOpenTeam} />
          <TabBar pageMode={pageMode} onClickTab={onClickTab} />
          <>
            {pageMode === "apply" ? (
              applyMemberList.list.map((applyMember) => (
                <ApplyMemberContainer key={applyMember.teamMemberId} {...applyMember} />
              ))
            ) : pageMode === "allow" ? (
              allowMemberList.list.map((allowMember) => (
                <AllowMemberContainer key={allowMember.teamMemberId} {...allowMember} />
              ))
            ) : (
              <div>404</div>
            )}
          </>
        </>
      )}
    </Layout>
  );
}
