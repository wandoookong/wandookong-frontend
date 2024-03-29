import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ConfirmModal from "../components/confirmModal";
import DialogueModal from "../../../components/modal/DialogueModal";
import MyCreatedTeamNavigation from "./components/myCreatedTeamNavigation";
import { teamCategoryText } from "../../../services/convertValueToName";
import { DdayTimer } from "../../../components/ddayTimer/DdayTimer";
import { isEmpty } from "../../../@types/utility/typeGuard";
import PendingMember from "./components/pendingMember";
import AcceptedMember from "./components/acceptedApplicant";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { MyCreatedTeamType } from "../../../@types/dto/myCreatedTeamType";
import { MyCreatedTeamAcceptedMember } from "../../../@types/dto/myCreatedTeamAcceptedMember";
import { MyCreatedTeamPendingMember } from "../../../@types/dto/myCreatedTeamPendingMember";
import qs from "qs";
import { deleteMyCreatedTeamApi } from "../../../api/myPages/deleteMyCreatedTeamApi";
import { DeleteFailMyCreateTeam } from "../../../@types/dto/deleteFailMyCreateTeam";
import { MyCreatedTeamPageApi } from "../../../api/myPages/myCreatedTeam/myCreatedTeamPageApi";
import { getAcceptedMembersApi } from "../../../api/myPages/myCreatedTeam/getAcceptedMembersApi";
import { isSuccess } from "../../../modules/httpValidation";
import { getPendingMembersApi } from "../../../api/myPages/myCreatedTeam/getPendingMembersApi";

export default function MyCurrentCreatedTeam() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleteModalOn, setIsDeleteModalOn] = useState(false);
  const [isNotDeleteModalOn, setIsNotDeleteModalOn] = useState(false);
  const [acceptedMemberId, setAcceptedMemberId] = useState(0);
  const [myCreatedTeam, setMyCreatedTeam] = useState<MyCreatedTeamType>({
    teamId: 1,
    teamCategory: "portfolio",
    title: "",
    closeDueYmd: "",
    currentTimestamp: 0,
    applyCount: 0,
    allowCount: 0,
    capacityCount: 0,
  });
  const [pendingMembers, setPendingMembers] = useState<MyCreatedTeamPendingMember[]>([
    {
      teamMemberId: 1,
      nickname: "",
      careerRange: "0_4",
      tagList: [""],
      roleDetail: "product",
      memo: "",
      memberStatus: "apply",
    },
  ]);
  const [acceptedMembers, setAcceptedMembers] = useState<MyCreatedTeamAcceptedMember[]>([
    {
      teamMemberId: 1,
      nickname: "",
      careerRange: "0_4",
      tagList: [""],
      roleDetail: "product",
      memo: "",
    },
  ]);

  const { category } = qs.parse(location.search, { ignoreQueryPrefix: true });

  const onCloseDeleteAcceptedMemberModal = () => {
    setIsDeleteModalOn(!isDeleteModalOn);
  };

  const onDeleteMyCreatedTeam = async () => {
    const response: DeleteFailMyCreateTeam = await deleteMyCreatedTeamApi(myCreatedTeam.teamId);
    if (response.failCode) {
      setIsDeleteModalOn(!isDeleteModalOn);
      setIsNotDeleteModalOn(!isNotDeleteModalOn);
      return;
    }
    navigate("/myAccount");
  };

  const onMoveToAcceptedMemberTab = () => {
    setIsNotDeleteModalOn(!isNotDeleteModalOn);
    navigate("/myCreatedTeam?category=accepted");
  };

  const onClickPendingTab = async () => {
    const response = await getPendingMembersApi();
    if (isSuccess(response)) {
      setPendingMembers(response.data.list);
      navigate("/myCreatedTeam?category=pending");
      return;
    }
    alert("다시 시도해주세요.");
  };

  const onClickAcceptedTab = async () => {
    const response = await getAcceptedMembersApi();
    if (isSuccess(response)) {
      setAcceptedMembers(response.data.list);
      navigate("/myCreatedTeam?category=accepted");
      return;
    }
    alert("다시 시도해주세요.");
  };

  useEffect(() => {
    (async function () {
      const response = await MyCreatedTeamPageApi();
      if (!response.success) {
        alert(response.message);
      }
      setMyCreatedTeam(response.myCreatedTeam);
      setPendingMembers(response.pendingMembers);
      setAcceptedMembers(response.acceptedMembers);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    setPendingMembers(pendingMembers.filter((member) => member.teamMemberId !== acceptedMemberId));
  }, [acceptedMemberId]);

  return (
    <>
      {isDeleteModalOn && (
        <ConfirmModal
          title="완두콩을 삭제하시겠습니까?"
          leftButtonLabel="유지하기"
          rightButtonLabel="삭제하기"
          onClickRightButton={onDeleteMyCreatedTeam}
          onClickLeftButton={onCloseDeleteAcceptedMemberModal}
        />
      )}
      {isNotDeleteModalOn && (
        <DialogueModal
          title={`현재 수락된 참여자가 있어 \n 완두콩 삭제가 어려워요!`}
          content="수락한 참여자 삭제시 완두콩 삭제가 가능합니다. 참여자 화면으로 이동하시겠습니까?"
          modalIcon="exclamation"
          onClose={() => setIsNotDeleteModalOn(!isNotDeleteModalOn)}
          singleButtonLabel="이동하기"
          onClickSingleButton={onMoveToAcceptedMemberTab}
          showCloseButton={true}
        />
      )}
      <MyCreatedTeamNavigation onClickDelete={() => setIsDeleteModalOn(!isDeleteModalOn)} />
      <ContentWrapper currentTab={category}>
        <header>
          <div className="title-wrapper">
            <p>{teamCategoryText(myCreatedTeam.teamCategory)}</p>
            <DdayTimer closeDueYmd={myCreatedTeam.closeDueYmd} currentTimestamp={myCreatedTeam.currentTimestamp} />
          </div>
          <h1>{myCreatedTeam.title}</h1>
        </header>
        <div className="tab-wrapper">
          <button className="apply-button" onClick={onClickPendingTab}>
            신청자
          </button>
          <button className="allow-button" onClick={onClickAcceptedTab}>
            참여자
          </button>
        </div>
        {isLoading && <p className="empty-wrapper">불러오고 있습니다...</p>}
        {!isLoading && category === "pending" && (isEmpty(pendingMembers) || !pendingMembers) && (
          <p className="empty-wrapper">아직 아무도 없어요</p>
        )}
        {!isLoading && category === "accepted" && (isEmpty(acceptedMembers) || !acceptedMembers) && (
          <p className="empty-wrapper">아직 아무도 없어요</p>
        )}
        <section className="applicants-wrapper">
          {!isLoading &&
            pendingMembers &&
            category === "pending" &&
            pendingMembers.map((applicant, index) => (
              <PendingMember
                key={index}
                nickname={applicant.nickname}
                teamMemberId={applicant.teamMemberId}
                tagList={applicant.tagList}
                careerRange={applicant.careerRange}
                roleDetail={applicant.roleDetail}
                memo={applicant.memo}
                memberStatus={applicant.memberStatus}
                setAcceptedMembersList={setAcceptedMemberId}
              />
            ))}
          {!isLoading &&
            acceptedMembers &&
            category === "accepted" &&
            acceptedMembers.map((applicant, index) => (
              <AcceptedMember
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

const ContentWrapper = styled.div<{ currentTab }>`
  margin: 92px 0 90px 0;

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
      color: ${(props) => (props.currentTab === "pending" ? colors.grey900 : colors.grey300)};
      box-shadow: ${(props) =>
        props.currentTab === "pending" ? ` 0 3px 0 0 ${colors.brand900}` : `0 1.5px 0 0 ${colors.subBrand50}`};
    }

    button.allow-button {
      color: ${(props) => (props.currentTab === "accepted" ? colors.grey900 : colors.grey300)};
      box-shadow: ${(props) =>
        props.currentTab === "accepted" ? `0 3px 0 0 ${colors.brand900}` : `0 1.5px 0 0 ${colors.subBrand50}`};
    }
  }

  section.applicants-wrapper {
    margin: 11px 20px 0;

    div:last-child {
      border-bottom: none;
    }
  }
`;
