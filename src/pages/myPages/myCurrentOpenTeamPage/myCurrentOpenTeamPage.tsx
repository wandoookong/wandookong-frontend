import { useEffect, useState } from "react";
import { CurrentOpenTeamReturnType } from "../../../api/types/teamType";
import MyTeamApi from "../../../api/myTeamApi";
import TeamMemberApi from "../../../api/teamMemberApi";
import { AllowMemberListReturnType, ApplyMemberListReturnType } from "../../../api/types/teamMemberType";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "./components/ConfirmModal";
import FloatingModal from "../../../components/modal/FloatingModal";
import CurrentOpenTeamNavigation from "./components/CurrentOpenTeamNavigation";
import { teamCategoryText } from "../../../services/convertValueToName";
import { DdayPill } from "../../../components/pill/DdayPill";
import { isEmpty } from "../../../@types/utility/typeGuard";
import ApplicantItem from "./components/applicantItem";
import AcceptedItem from "./components/acceptedApplicant";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

type CurrentTab = "apply" | "allow";
type PromiseResponse = [CurrentOpenTeamReturnType, ApplyMemberListReturnType, AllowMemberListReturnType];

export default function MyCurrentOpenTeamPage() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<CurrentTab>("apply");
  const [isDeleteModalOn, setIsDeleteModalOn] = useState<boolean>(false);
  const [isNotDeleteModalOn, setIsNotDeleteModalOn] = useState<boolean>(false);
  const [currentOpenTeam, setCurrentOpenTeam] = useState<CurrentOpenTeamReturnType>({
    teamId: 1,
    teamCategory: "portfolio",
    title: "",
    closeDueYmd: "",
    currentTimestamp: 0,
    applyCount: 0,
    allowCount: 0,
    capacityCount: 0,
  });
  const [applyMemberList, setApplyMemberList] = useState<ApplyMemberListReturnType>({
    list: [
      {
        teamMemberId: 1,
        nickname: "",
        careerRange: "0_4",
        tagList: [""],
        roleDetail: "product",
        memo: "",
        memberStatus: "apply",
      },
    ],
  });
  const [allowMemberList, setAllowMemberList] = useState<AllowMemberListReturnType>({
    list: [
      {
        teamMemberId: 1,
        nickname: "",
        careerRange: "0_4",
        tagList: [""],
        roleDetail: "product",
        memo: "",
      },
    ],
  });

  const onClickDelete = async () => {
    const response = await MyTeamApi.deleteMyTeam(currentOpenTeam.teamId);
    if (!response.result && response.failCode === "remain_allow_member") {
      setIsNotDeleteModalOn(!isNotDeleteModalOn);
      return;
    }
    setIsDeleteModalOn(!isDeleteModalOn);
  };

  const onClickNo = () => {
    setIsDeleteModalOn(false);
  };

  const onDeleteMyTeam = async () => {
    const response = await MyTeamApi.deleteMyTeam(currentOpenTeam.teamId);
    if (response.result) {
      navigate("/myAccount");
      return;
    }
    return alert("다시 시도해주세요.");
  };

  const onClickMove = () => {
    navigate("/my-current-open?tab=allow");
  };

  useEffect(() => {
    navigate(`/my-current-open?tab=${currentTab}`);
  }, [currentTab]);

  useEffect(() => {
    (async function () {
      const response: PromiseResponse = await Promise.all([
        MyTeamApi.getCurrentOpenTeam(),
        TeamMemberApi.getApplyMemberList(),
        TeamMemberApi.getAllowMemberList(),
      ]);
      setCurrentOpenTeam(response[0]);
      setApplyMemberList(response[1]);
      setAllowMemberList(response[2]);
    })();
  }, []);

  return (
    <>
      {isDeleteModalOn && (
        <ConfirmModal title="완두콩을 삭제하시겠습니까?" onClickYes={onDeleteMyTeam} onClickNo={onClickNo} />
      )}
      {isNotDeleteModalOn && (
        <FloatingModal
          title={`현재 수락된 참여자가 있어 \n 완두콩 삭제가 어려워요!`}
          content="수락한 참여자 삭제시 완두콩 삭제가 가능합니다. 참여자 화면으로 이동하시겠습니까?"
          onClose={onClickMove}
          buttonLabel="이동하기"
          showClose={false}
        />
      )}
      <CurrentOpenTeamNavigation onClickDelete={onClickDelete} />
      <ContentWrapper currentTab={currentTab}>
        <header>
          <div className="title-wrapper">
            <p>{teamCategoryText(currentOpenTeam.teamCategory)}</p>
            <DdayPill closeDueYmd={currentOpenTeam.closeDueYmd} currentTimestamp={currentOpenTeam.currentTimestamp} />
          </div>
          <h1>{currentOpenTeam.title}</h1>
        </header>
        <div className="tab-wrapper">
          <button className="apply-button" onClick={() => setCurrentTab("apply")}>
            신청자
          </button>
          <button className="allow-button" onClick={() => setCurrentTab("allow")}>
            참여자
          </button>
        </div>
        {currentTab === "apply" && (isEmpty(applyMemberList.list) || !applyMemberList) && (
          <p className="empty-wrapper">아직 아무도 없어요</p>
        )}
        {currentTab === "allow" && (isEmpty(allowMemberList.list) || !allowMemberList) && (
          <p className="empty-wrapper">아직 아무도 없어요</p>
        )}
        <section className="applicants-wrapper">
          {applyMemberList &&
            applyMemberList.list.map((applicant, index) => (
              <ApplicantItem
                key={index}
                nickname={applicant.nickname}
                teamMemberId={applicant.teamMemberId}
                tagList={applicant.tagList}
                careerRange={applicant.careerRange}
                roleDetail={applicant.roleDetail}
                memberStatus={applicant.memberStatus}
                memo={applicant.memo}
              />
            ))}
          {allowMemberList &&
            allowMemberList.list.map((applicant, index) => (
              <AcceptedItem
                key={index}
                teamMemberId={applicant.teamMemberId}
                nickname={applicant.nickname}
                careerRange={applicant.careerRange}
                tagList={applicant.tagList}
                roleDetail={applicant.roleDetail}
                memo={applicant.memo}
              />
            ))}
        </section>
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div<{ currentTab: CurrentTab }>`
  margin-top: 92px;

  header {
    display: flex;
    flex-direction: column;
    margin: 0 0 15px 0;
    padding: 0 20px;

    div.title-wrapper {
      display: flex;
      justify-content: space-between;
      flex-grow: 1;

      p {
        margin: 0 0 5px 0;
        padding: 0;
        font-size: 12px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: -0.005em;
        text-align: left;
        color: ${colors.grey600};
      }
    }

    h1 {
      display: block;
      margin: 0;
      padding: 0;
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
      letter-spacing: 0;
      text-align: left;
      color: ${colors.grey900};
      word-break: break-all;
    }
  }

  p.empty-wrapper {
    margin-top: 100px;
    font-size: 14px;
    color: ${colors.grey300};
    text-align: center;
  }

  div.tab-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px 7px;

    button {
      flex: 1 0 50%;
      padding: 0 0 6px;
      background: transparent;
      border: none;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      cursor: pointer;
      transition: all 0.1s ease-out;
    }

    button.apply-button {
      color: ${(props) => (props.currentTab === "apply" ? colors.grey900 : colors.grey300)};
      box-shadow: ${(props) =>
        props.currentTab === "apply" ? ` 0 3px 0 0 ${colors.brand900}` : `0 1.5px 0 0 ${colors.subBrand50}`};
    }

    button.allow-button {
      color: ${(props) => (props.currentTab === "allow" ? colors.grey900 : colors.grey300)};
      box-shadow: ${(props) =>
        props.currentTab === "allow" ? `0 3px 0 0 ${colors.brand900}` : `0 1.5px 0 0 ${colors.subBrand50}`};
    }
  }

  section.applicants-wrapper {
    margin: 11px 20px 0;
  }
`;
