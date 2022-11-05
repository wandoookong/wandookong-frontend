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
import { useLocation } from "react-router-dom";
import ConfirmModal from "../../components/modal/ConfirmModal";

export type PageModeType = "apply" | "allow";

export default function MyCurrentOpenTeamPage() {
  const location = useLocation();

  console.log("hash", location.hash);
  console.log("pathname", location.pathname);
  console.log("search", location.search);
  const [isLoading, setIsLoading] = useState(true);
  const [pageMode, setPageMode] = useState<PageModeType>(location.hash === "#allow" ? "allow" : "apply");
  const [currentOpenTeam, setCurrentOpenTeam] = useState({} as CurrentOpenTeamReturnType);
  const [applyMemberList, setApplyMemberList] = useState({} as ApplyMemberListReturnType);
  const [allowMemberList, setAllowMemberList] = useState({} as AllowMemberListReturnType);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  useEffect(() => {
    Promise.all([
      MyTeamApi.getCurrentOpenTeam(),
      pageMode === "apply" ? TeamMemberApi.getApplyMemberList() : TeamMemberApi.getAllowMemberList(),
    ])
      .then(([currentOpenTeamRes, memberListRes]) => {
        setCurrentOpenTeam(currentOpenTeamRes);
        if (pageMode === "apply") setApplyMemberList(memberListRes as ApplyMemberListReturnType);
        else setAllowMemberList(memberListRes as AllowMemberListReturnType);
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

  const onClickDelete = (e) => {
    e.preventDefault();

    setIsDeleteModal(true);
  };

  const onClickNo = (e) => {
    e.preventDefault();

    setIsDeleteModal(false);
  };

  const onDeleteMyTeam = () => {
    MyTeamApi.deleteMyTeam(currentOpenTeam.teamId).then((res) => {
      if (!res.result && res.failCode === "remain_allow_member") {
        // 삭제 불가 모달
      }
    });
  };

  return (
    <Layout>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <Header onClickDelete={onClickDelete} />
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
          {isDeleteModal && (
            <ConfirmModal title={"완두콩을 삭제하시겠습니까?"} onClickYes={onDeleteMyTeam} onClickNo={onClickNo} />
          )}
        </>
      )}
    </Layout>
  );
}
