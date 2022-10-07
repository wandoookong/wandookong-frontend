import styled from "@emotion/styled";
import { roleData } from "../../requestForm/requestFormSteps/roleData";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  position: relative;
  margin: 20px;
  padding: 16px 12px 22px 12px;
  background: #fff;
  border-radius: 8px;
`;

const TitleWrapper = styled.div`
  p {
    margin: 0 0 8px 0;
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 400;
    color: #3f3f3f;
  }
  h2 {
    font-family: Pretendard;
    font-size: 16px;
    margin: 0;
  }
`;

const DayCounter = styled.div`
  position: absolute;
  padding: 3px 8px;
  top: 16px;
  right: 12px;
  background: #ddba40;
  border-radius: 23px;
  p {
    margin: 0;
    padding: 0;
    color: #ffffff;
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 700;
  }
`;

const RoleWrapper = styled.div`
  display: flex;
  margin: 12px 0 0 0;
  p {
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`;
const RoleContent = styled.div`
  margin-right: 14px;
`;

const RoleImage = styled.div`
  width: 48px;
  height: 48px;
  margin: 0;
  background: #d3eef5;
  border-radius: 28px;
  + p {
    margin-top: 10px;
    font-wieght: 300;
    white-space: nowrap;
  }
`;

export default function RequestItem({ content }) {
  const navigate = useNavigate();
  const labelFinder = (role) => {
    const label = roleData.filter((value) => value.value == role);
  };

  labelFinder("ux_ui");

  return (
    <Wrapper key={content.teamCapacityId} onClick={() => navigate(`/${content.teamCapacityId}`)}>
      <TitleWrapper>
        {content.teamCategory === "portfolio" ? <p>포트폴리오</p> : <p>사이드 프로젝트</p>}
        <h2>{content.title}</h2>
      </TitleWrapper>
      <DayCounter>
        <p>D-6</p>
      </DayCounter>
      <RoleWrapper>
        {content.teamCapacityList.map((role) => (
          <RoleContent key={content.teamCapacityId}>
            <RoleImage />
            <p>{role.roleDetail}</p>
          </RoleContent>
        ))}
      </RoleWrapper>
    </Wrapper>
  );
}
