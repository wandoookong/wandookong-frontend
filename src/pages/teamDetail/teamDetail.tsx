import { useNavigate, useParams } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";
import { SingleButton } from "../../components/buttons/singleButton";
import { useEffect, useState } from "react";
import TeamApi from "../../api/teamApi";
import { isEmpty } from "../../@types/utility/typeGuard";
import { css } from "@emotion/react";
import { colors } from "../../styles/colors";
import CommonModalHeader from "../../components/header/commonModalHeader";

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
        teamLead: true,
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
        <div className="title-wrapper">
          <div>
            <p>포트폴리오</p>
            <h1>{teamData.title}</h1>
          </div>
          <span>D-6</span>
        </div>
        <div>
          <h2>완두콩 소개</h2>
          <TeamDescriptionWrapper isDescriptionOpen={isDescriptionOpen}>
            <p>{teamData.description}</p>
            <ShowMoreButton
              isDescriptionOpen={isDescriptionOpen}
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            >
              <ExpandMoreIcon sx={{ fontSize: 22 }} />
            </ShowMoreButton>
          </TeamDescriptionWrapper>
        </div>
        <div className="position-wrapper">
          <h2>멤버 콩</h2>
          {teamData.teamCapacityList.map((role, index) => (
            <PositionWrapper key={index} isPositionEmpty={Object.keys(role).includes("careerRangeName")}>
              <PositionImage />
              <PositionContent>
                <PositionTitleWrapper>
                  <div className="position-title">
                    <h3>
                      {Object.keys(role).includes("careerRangeName")
                        ? role.roleDetailName
                        : role.roleDetailName + " 콩 모집 중이에요"}
                    </h3>
                    {role.teamLead && <span className="leader-tag">리더</span>}
                  </div>
                  {!isEmpty(role.careerRangeName) && <span>{role.careerRangeName}</span>}
                </PositionTitleWrapper>
                <div className="tag-wrapper">
                  {Object.keys(role).includes("tagList") &&
                    role.tagList.map((tag, index) => <span key={index}>{tag}</span>)}
                </div>
              </PositionContent>
            </PositionWrapper>
          ))}
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
  h1 {
    margin: 0;
    padding: 5px 0 0 0;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0;
    text-align: left;
  }

  h2 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 700;
  }

  main {
    margin: 108px 0 0 0;
    padding: 0 20px;

    div.title-wrapper {
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
        padding: 0;
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

    div.position-wrapper {
      margin-bottom: 150px;
      color: ${colors.grey900};
    }
  }
`;

const PositionTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    display: inline;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0;
    color: ${colors.grey900};
  }

  div.position-title {
    display: flex;
  }

  span {
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    color: ${colors.grey600};
  }

  span.leader-tag {
    margin-left: 8px;
    padding: 0 8px;
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    border-radius: 12px;
    color: ${colors.grey900};
    background: ${colors.subBrand700};
  }
`;

const PositionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  div.tag-wrapper {
    display: flex;
    gap: 5px;
    margin-top: 7px;

    span {
      padding: 6px 8px;
      border-radius: 50px;
      border: 1px solid ${colors.grey100};
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
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

const ShowMoreButton = styled.div<{ isDescriptionOpen: boolean }>`
  display: flex;
  justify-content: center;
  transform: ${(props) => (props.isDescriptionOpen ? "rotate(180deg)" : "none")};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

const PositionWrapper = styled.div<{ isPositionEmpty: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 0 9px 0;
  padding: 11px 14px 10px 14px;
  height: 71px;
  background: ${(props) => (props.isPositionEmpty ? colors.white : colors.brand300)};
  border-radius: 8px;
  box-sizing: border-box;
`;

const PositionImage = styled.div`
  min-width: 50px;
  height: 50px;
  margin: 0 6px 0 0;
  border-radius: 28px;
  background: ${colors.grey900};
`;
