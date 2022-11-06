import { useNavigate, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";
import { SingleButton } from "../../components/form/button/singleButton";
import { useEffect, useState } from "react";
import TeamApi from "../../api/teamApi";

export function TeamDetail() {
  const navigate = useNavigate();
  const param = useParams();

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
    <div>
      <HeaderWrap>
        <CloseIcon sx={{ fontSize: 28 }} onClick={() => navigate(-1)} />
      </HeaderWrap>
      <Wrapper>
        <TitleWrap>
          <div>
            <Label>포트폴리오</Label>
            <TeamTitle>{teamData.title}</TeamTitle>
          </div>
          <TagWrapper>
            <p>D-6</p>
          </TagWrapper>
        </TitleWrap>
        <div>
          <Title>완두콩 소개</Title>
          <DescriptionWrap>
            <Description>{teamData.description}</Description>
            <DescriptionButtonWrap>
              <ExpandMoreIcon sx={{ fontSize: 22 }} onClick={() => alert("클릭됨")} />
            </DescriptionButtonWrap>
          </DescriptionWrap>
        </div>
        <div>
          <Title>멤버 콩</Title>
          <TeamWrap backgroundColor="#afd89e">
            <RoleImage />
            <div>
              <ContentLabel>프론트 콩 모집 중이에요.</ContentLabel>
            </div>
          </TeamWrap>
          <TeamWrap backgroundColor="#afd89e">
            <RoleImage />
            <div>
              <ContentLabel>앱 콩 모집 중이에요.</ContentLabel>
            </div>
          </TeamWrap>
          {teamData.teamCapacityList.map((role) => (
            <TeamWrap backgroundColor="#ffffff">
              <RoleImage />
              <TeamContent>
                <TeamTitleLayout>
                  <div>
                    <RoleLabel>{role.roleDetailName}</RoleLabel>
                    {role.teamLead && <LeadTag>리더</LeadTag>}
                  </div>
                  <span>{role.careerRangeName}</span>
                </TeamTitleLayout>
                {/*{role.tagList.length > 0 && role.tagList.map((tag) => <span>{tag}</span>)}*/}
              </TeamContent>
            </TeamWrap>
          ))}
          <EmptySpace>
            <TeamWrap backgroundColor="#ffffff">
              <RoleImage />
              <div>
                <ContentLabel>백앤드 콩 모집 중이에요.</ContentLabel>
              </div>
            </TeamWrap>
          </EmptySpace>
        </div>
        <SingleButton label="참여하기" onClick={() => navigate(`/team/${param.teamId}/apply`)} />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 92px 0 0 0;
  padding: 0 20px;
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 44px 12px 20px;
  box-sizing: border-box;
  background: rgba(250, 247, 235, 1);
`;

const EmptySpace = styled.div`
  margin: 0 0 80px 0;
  opacity: 0;
`;

const TagWrapper = styled.div`
  height: 100%;
  padding: 3px 8px;
  border-radius: 40px;
  background: #ddba40;

  p {
    margin: 0;
    padding: 0;
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    line-height: 17px;
  }
`;

const ContentLabel = styled.p`
  display: block;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0;
  color: #242c35;
`;

const RoleLabel = styled.dt`
  display: inline;
  margin-bottom: 7px;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0;
  color: #242c35;
`;

const LeadTag = styled.span`
  margin-left: 8px;
  padding: 0 8px;
  font-size: 10px;
  font-weight: 400;
  line-height: 143%;
  border-radius: 12px;
  color: #242c35;
  background: #f8e65a;
`;

const TeamTitleLayout = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    color: #434445;
  }
`;

const TeamContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TeamTitle = styled.h3`
  margin: 0;
  padding: 5px 0 0 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
`;

const Label = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: -0.005em;
  text-align: left;
`;

const TitleWrap = styled.div`
  display: flex;
  margin: 0 0 23px 0;
  padding: 0;
  justify-content: space-between;
`;

const DescriptionWrap = styled.div`
  width: auto;
  height: auto;
  background: #ffffff;
  margin: 0 0 24px 0;
  padding: 10px 14px;
  border-radius: 8px;
  box-sizing: border-box;
`;

const Description = styled.span`
  font-size: 14px;
  line-height: 135%;
  color: #242c35;
`;

const DescriptionButtonWrap = styled.div`
  padding: 8px 0 0 0;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
`;

const TeamWrap = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 0 9px 0;
  padding: 11px 14px 10px 14px;
  height: 71px;
  background: ${(props) => props.backgroundColor};
  border-radius: 8px;
  box-sizing: border-box;
`;

const RoleImage = styled.div`
  min-width: 50px;
  height: 50px;
  margin: 0 6px 0 0;
  border-radius: 28px;
  background: linear-gradient(137.26deg, #c2d83b 0%, #65bc46 104.28%);
`;
