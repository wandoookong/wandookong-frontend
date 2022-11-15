import { useNavigate, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";
import { SingleButton } from "../../components/buttons/singleButton";
import { useEffect, useState } from "react";
import TeamApi from "../../api/teamApi";
import { isEmpty } from "../../@types/utility/typeGuard";
import { css } from "@emotion/react";

export function TeamDetail() {
  const navigate = useNavigate();
  const param = useParams();
  const [teamDescription, setTeamDescription] = useState(false);
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
      <header>
        <CloseIcon sx={{ fontSize: 28 }} onClick={() => navigate(-1)} />
      </header>
      <main>
        <TitleWrapper>
          <div>
            <p>포트폴리오</p>
            <h1>{teamData.title}</h1>
          </div>
          <span>D-6</span>
        </TitleWrapper>
        <div>
          <h2>완두콩 소개</h2>
          <TeamDescriptionWrapper isOpen={teamDescription}>
            <p>{teamData.description}</p>
            <ShowMoreButton>
              <ExpandMoreIcon sx={{ fontSize: 22 }} onClick={() => setTeamDescription(!teamDescription)} />
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
                  <div>
                    <h3>
                      {Object.keys(role).includes("careerRangeName")
                        ? role.roleDetailName
                        : role.roleDetailName + " 콩 모집 중이에요"}
                    </h3>
                    {role.teamLead && <span className="leader-tag">리더</span>}
                  </div>
                  {!isEmpty(role.careerRangeName) && <span>{role.careerRangeName}</span>}
                </PositionTitleWrapper>
                {/*{!isEmpty(role.tagList) && role.tagList.map((tag, index) => <span key={index}>{tag}</span>)}*/}
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

  header {
    display: flex;
    flex-direction: row-reverse;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 44px 12px 20px;
    box-sizing: border-box;
    background: rgba(250, 247, 235, 1);
  }

  main {
    margin: 92px 0 0 0;
    padding: 0 20px;

    div.position-wrapper {
      margin-bottom: 150px;
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  margin: 0 0 23px 0;
  padding: 0;
  justify-content: space-between;

  p {
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: -0.005em;
    text-align: left;
  }

  span {
    height: 100%;
    margin: 0;
    padding: 3px 8px;
    border-radius: 40px;
    background: #ddba40;
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    line-height: 17px;
  }
`;

const PositionTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    display: inline;
    margin-bottom: 7px;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0;
    color: #242c35;
  }

  span {
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    color: #434445;
  }

  span.leader-tag {
    margin-left: 8px;
    padding: 0 8px;
    font-size: 10px;
    font-weight: 400;
    line-height: 143%;
    border-radius: 12px;
    color: #242c35;
    background: #f8e65a;
  }
`;

const PositionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TeamDescriptionWrapper = styled.div<{ isOpen: boolean }>`
  width: auto;
  height: auto;
  background: #ffffff;
  margin: 0 0 24px 0;
  padding: 10px 14px;
  border-radius: 8px;
  box-sizing: border-box;

  p {
    display: -webkit-box;
    font-size: 14px;
    line-height: 135%;
    color: #242c35;

    ${(props) => {
      if (!props.isOpen) {
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

const ShowMoreButton = styled.div`
  padding: 8px 0 0 0;
  display: flex;
  justify-content: center;
`;

const PositionWrapper = styled.div<{ isPositionEmpty: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 0 9px 0;
  padding: 11px 14px 10px 14px;
  height: 71px;
  background: ${(props) => (props.isPositionEmpty ? "#ffffff" : "#afd89e")};
  border-radius: 8px;
  box-sizing: border-box;
`;

const PositionImage = styled.div`
  min-width: 50px;
  height: 50px;
  margin: 0 6px 0 0;
  border-radius: 28px;
  background: linear-gradient(137.26deg, #c2d83b 0%, #65bc46 104.28%);
`;
