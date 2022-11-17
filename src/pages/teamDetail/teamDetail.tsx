import { useNavigate, useParams } from "react-router-dom";
import ExpandMoreIcon from "../../assets/icons/more.svg";
import styled from "@emotion/styled";
import { SingleButton } from "../../components/buttons/singleButton";
import { useEffect, useState } from "react";
import TeamApi from "../../api/teamApi";
import { css } from "@emotion/react";
import { colors } from "../../styles/colors";
import CommonModalHeader from "../../components/header/commonModalHeader";
import PositionItem from "./components/positionItem";

export function TeamDetail() {
  const navigate = useNavigate();
  const param = useParams();
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);
  const [teamData, setTeamData] = useState<TeamData>({
    teamId: 1,
    title: "",
    description: "",
    closeDueYmd: "",
    teamStatus: "",
    teamCapacityList: [
      {
        teamCapacityId: 0,
        roleDetail: "",
        roleDetailName: "",
        roleMaxCount: 0,
        teamLead: false,
        careerRange: "",
        careerRangeName: "",
        tagList: [""],
      },
    ],
    teamDetailStatus: "",
  });

  useEffect(() => {
    (async function () {
      const response = await TeamApi.getTeamData(Number(param.teamId));
      setTeamData(response);
    })();
  }, [param.teamId]);

  return (
    <Container>
      <CommonModalHeader onClick={() => navigate(-1)} />
      <main>
        <header>
          <div>
            <p>포트폴리오</p>
            <h1>{teamData.title}</h1>
          </div>
          <span>D-6</span>
        </header>
        <div>
          <section>
            <h2>완두콩 소개</h2>
            <TeamDescriptionWrapper isDescriptionOpen={isDescriptionOpen}>
              <p>{teamData.description}</p>
              <ShowMoreButton
                isDescriptionOpen={isDescriptionOpen}
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
              />
            </TeamDescriptionWrapper>
          </section>
          <section className="position-wrapper">
            <h2>멤버 콩</h2>
            {teamData.teamCapacityList.map((role, index) => (
              <PositionItem
                key={index}
                positionName={role.roleDetailName}
                isPositionValid={Object.keys(role).includes("careerRangeName")}
                isLeader={role.teamLead}
                careerRangeName={role.careerRangeName}
                tags={role.tagList}
              />
            ))}
          </section>
        </div>
        <SingleButton
          label={teamData.teamStatus === "open" ? "참여하기" : "모집 마감"}
          onClick={() => navigate(`/team/${param.teamId}/apply`)}
          isActive={teamData.teamStatus === "open"}
        />
      </main>
    </Container>
  );
}

const Container = styled.div`
  h2 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 700;
  }

  main {
    margin: 108px 0 0 0;
    padding: 0 20px;

    header {
      display: flex;
      margin: 0 0 23px 0;
      padding: 0;
      justify-content: space-between;

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

      h1 {
        margin: 0;
        padding: 0;
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0;
        text-align: left;
        color: ${colors.grey900};
      }

      span {
        height: 100%;
        margin: 0;
        padding: 3px 8px;
        border-radius: 40px;
        background: ${colors.subBrand900};
        font-size: 12px;
        font-weight: 700;
        line-height: 17px;
        color: ${colors.white};
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

  p {
    display: -webkit-box;
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 135%;
    color: ${colors.grey900};

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
