import { useEffect, useState } from "react";
import { CurrentOpenTeamReturnType } from "../../../api/types/teamType";
import MyTeamApi from "../../../api/myTeamApi";
import TeamMemberApi from "../../../api/teamMemberApi";
import { AllowMemberListReturnType, ApplyMemberListReturnType } from "../../../api/types/teamMemberType";
import CurrentOpenTeamNavigation from "./components/CurrentOpenTeamNavigation";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "./components/ConfirmModal";
import styled from "@emotion/styled";
import { DdayPill } from "../../../components/pill/DdayPill";
import { colors } from "../../../styles/colors";
import { teamCategoryText } from "../utilities/convertValueToName";

type CurrentTab = "apply" | "allow";

type PromiseResponse = [CurrentOpenTeamReturnType, ApplyMemberListReturnType, AllowMemberListReturnType];

export default function MyCurrentOpenTeamPage() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<CurrentTab>("apply");
  const [isDeleteModalOn, setIsDeleteModalOn] = useState<boolean>(false);

  useEffect(() => {
    navigate(`/my-current-open?tab=${currentTab}`);
  }, [currentTab]);

  const [currentOpenTeam, setCurrentOpenTeam] = useState<CurrentOpenTeamReturnType>({
    teamId: 1,
    teamCategory: "portfolio",
    title: "",
    closeDueYmd: "",
    applyCount: 0,
    allowCount: 0,
    capacityCount: 0,
  });
  const [applyMemberList, setApplyMemberList] = useState({} as ApplyMemberListReturnType);
  const [allowMemberList, setAllowMemberList] = useState({} as AllowMemberListReturnType);

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

  const onClickDelete = () => {
    setIsDeleteModalOn(!isDeleteModalOn);
  };

  const onClickNo = () => {
    setIsDeleteModalOn(false);
  };

  const onDeleteMyTeam = () => {
    MyTeamApi.deleteMyTeam(currentOpenTeam.teamId).then((res) => {
      if (!res.result && res.failCode === "remain_allow_member") {
        // 삭제 불가 모달
      }
    });
  };

  return (
    <>
      {isDeleteModalOn && (
        <ConfirmModal title="완두콩을 삭제하시겠습니까?" onClickYes={onDeleteMyTeam} onClickNo={onClickNo} />
      )}
      <CurrentOpenTeamNavigation onClickDelete={onClickDelete} />
      <ContentWrapper currentTab={currentTab}>
        <header>
          <div className="title-wrapper">
            <p>{teamCategoryText(currentOpenTeam.teamCategory)}</p>
            <DdayPill closeDueYmd={currentOpenTeam.closeDueYmd} />
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
        {!currentOpenTeam && <p>아직 아무도 없어요</p>}
        {currentTab === "apply" && (
          <ListWrapper>
            <div className="applicant-wrapper">
              <div className="applicant-content-wrapper">
                <div>
                  <div>
                    <div>
                      <b>닉네임</b>
                      <span>서비스기획자</span>
                    </div>
                    <ul>
                      <li>태그1</li>
                      <li>태그2</li>
                    </ul>
                  </div>
                  <p>내용</p>
                </div>
                <button>열기</button>
              </div>
              <div className="button-wrapper">
                <button className="decline-button">거절</button>
                <button className="accept-button">수락</button>
              </div>
            </div>
          </ListWrapper>
        )}
      </ContentWrapper>
    </>
  );
}
const ListWrapper = styled.section`
  margin: 11px 20px 0;
  border-bottom: 1px solid ${colors.subBrand50};

  div.applicant-wrapper {
    display: flex;
    flex-direction: column;

    div.applicant-content-wrapper {
      padding: 16px 14px;
      border-radius: 8px;
      background: ${colors.white};
    }

    div.button-wrapper {
      display: flex;
      gap: 10px;
      margin: 10px 0 20px 0;

      button {
        flex: 1 1 50%;
        padding: 11px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        cursor: pointer;

        &.decline-button {
          background: transparent;
          color: ${colors.grey600};
          border: 1px solid ${colors.brand400};
        }
        &.accept-button {
          border: none;
          background: ${colors.brand900};
          color: ${colors.white};
        }
      }
    }
  }
`;

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
`;
