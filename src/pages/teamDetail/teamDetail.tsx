import { useNavigate, useParams } from "react-router-dom";
import ExpandMoreIcon from "../../assets/icons/more.svg";
import styled from "@emotion/styled";
import { SingleButton } from "../../components/buttons/singleButton";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { colors } from "../../styles/colors";
import CommonModalHeader from "../../components/header/commonModalHeader";
import PositionItem from "./components/positionItem";
import { teamCategoryText } from "../../services/convertValueToName";
import { DdayTimer } from "../../components/ddayTimer/DdayTimer";
import { getTeamDetailApi } from "../../api/teamDetail/getTeamDetailApi";
import { TeamDetailType } from "../../@types/dto/getTeamDetail";
import TeamApplyFailModal from "./components/teamApplyFailModal";
import { applyFailModalContent } from "./utilities/applyFailModalContent";

export function TeamDetail() {
  const navigate = useNavigate();
  const param = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isApplyFailModalOn, setIsApplyFailModalOn] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [teamDetailData, setTeamDetailData] = useState<TeamDetailType>({
    closeDueYmd: "",
    description: "",
    teamCapacityList: [
      {
        roleDetail: "product",
        roleDetailName: "",
        roleMaxCount: 1,
        teamCapacityId: 1,
        teamLead: false,
        careerRangeName: "",
        careerRange: "0_4",
        tagList: [""],
      },
    ],
    teamCategory: "portfolio",
    teamDetailStatus: "ready",
    teamId: 1,
    teamStatus: "open",
    title: "",
  });

  const onApply = () => {
    if (teamDetailData.teamStatus === "open" && teamDetailData.teamDetailStatus === "ready") {
      return navigate(`/team/${param.teamId}/apply`);
    }
    if (teamDetailData.teamStatus === "open" && teamDetailData.teamDetailStatus !== "ready") {
      return setIsApplyFailModalOn(!isApplyFailModalOn);
    }
  };

  useEffect(() => {
    (async function () {
      const response = await getTeamDetailApi(Number(param.teamId));
      setTeamDetailData(response);
      setIsLoading(!isLoading);
    })();
  }, [param.teamId]);

  return (
    <Container>
      {isApplyFailModalOn && (
        <TeamApplyFailModal
          onClick={() => setIsApplyFailModalOn(!isApplyFailModalOn)}
          title={applyFailModalContent(teamDetailData.teamDetailStatus).title}
          content={applyFailModalContent(teamDetailData.teamDetailStatus).content}
        />
      )}
      <CommonModalHeader onClick={() => navigate(-1)} />
      <main>
        <header>
          <div className="header-wrapper">
            <p>{teamCategoryText(teamDetailData.teamCategory)}</p>
            <DdayTimer closeDueYmd={teamDetailData.closeDueYmd} currentTimestamp={Date.now()} />
          </div>
          <h1>{teamDetailData.title}</h1>
        </header>
        {isLoading && <p>불러오는 중 입니다...</p>}
        {!isLoading && (
          <div>
            <section>
              <h2>완두콩 소개</h2>
              <TeamDescriptionWrapper isDescriptionOpen={isDescriptionOpen}>
                <pre>{teamDetailData.description}</pre>
                <ShowMoreButton
                  isDescriptionOpen={isDescriptionOpen}
                  onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                />
              </TeamDescriptionWrapper>
            </section>
            <section className="position-wrapper">
              <h2>멤버 콩</h2>
              <ul>
                {teamDetailData.teamCapacityList.map((role, index) => (
                  <PositionItem
                    key={index}
                    positionName={role.roleDetailName}
                    isPositionValid={Object.keys(role).includes("careerRangeName")}
                    isLeader={role.teamLead}
                    careerRangeName={role.careerRangeName}
                    tags={role.tagList}
                    onClick={onApply}
                  />
                ))}
              </ul>
            </section>
          </div>
        )}
      </main>
      <SingleButton
        label={teamDetailData.teamStatus === "open" ? "참여하기" : "모집 마감"}
        onClick={onApply}
        isActive={teamDetailData.teamStatus === "open"}
      />
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 60px;

  h2 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 700;
  }

  main {
    margin: 80px 0 0 0;
    padding: 0 20px;

    header {
      display: flex;
      flex-direction: column;
      margin: 0 0 23px 0;
      padding: 0;

      div.header-wrapper {
        display: flex;
        justify-content: space-between;

        p {
          flex: 1 0 80%;
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
        margin-top: 5px;
        padding: 0;
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0;
        text-align: left;
        color: ${colors.grey900};
      }
    }

    section.position-wrapper {
      margin-bottom: 150px;
      color: ${colors.grey900};
    }
  }
`;

const TeamDescriptionWrapper = styled.div<{ isDescriptionOpen: boolean }>`
  width: auto;
  height: auto;
  background: ${colors.white};
  margin: 0 0 24px 0;
  padding: 10px 14px;
  border-radius: 8px;
  box-sizing: border-box;

  pre {
    display: -webkit-box;
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 135%;
    color: ${colors.grey900};
    white-space: pre-wrap;

    ${(props) => {
      if (!props.isDescriptionOpen) {
        return css`
          overflow: hidden;
          word-break: break-all;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        `;
      }
    }}
  }
`;

const ShowMoreButton = styled.button<{ isDescriptionOpen: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 16px;
  border: none;
  background: transparent url(${ExpandMoreIcon}) center / 16px no-repeat;
  transform: ${(props) => (props.isDescriptionOpen ? "rotate(180deg)" : "none")};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;
