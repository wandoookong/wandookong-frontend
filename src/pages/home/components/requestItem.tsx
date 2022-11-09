import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

type roleMemberCount = {
  roleMemberCount: number;
};

export default function RequestItem({ teamId, content }) {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={(e) => navigate(`/team/${teamId}`)}>
      <TitleWrapper>
        {content.teamCategory === "portfolio" ? <span>포트폴리오</span> : <span>사이드 프로젝트</span>}
        <h2>{content.title}</h2>
      </TitleWrapper>
      <TagWrapper>D-6</TagWrapper>
      <RoleWrapper>
        {content.teamCapacityList.map((role, index) => (
          <div key={index}>
            <RoleImage roleMemberCount={role.roleMemberCount} />
            <span>{role.roleDetailName}</span>
          </div>
        ))}
      </RoleWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin: 20px;
  padding: 16px 12px 22px 12px;
  background: #fff;
  border-radius: 8px;
`;

const TitleWrapper = styled.div`
  span {
    font-size: 12px;
    font-weight: 400;
    color: #3f3f3f;
  }

  h2 {
    font-size: 16px;
    margin-top: 8px;
  }
`;

const TagWrapper = styled.span`
  position: absolute;
  margin: 0;
  padding: 3px 8px;
  top: 16px;
  right: 12px;
  background: #ddba40;
  border-radius: 40px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
`;

const RoleWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin: 12px 0 0 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: #242c35;
    white-space: nowrap;
  }
`;

const RoleImage = styled.div<roleMemberCount>`
  width: 48px;
  height: 48px;
  margin: 0;
  border-radius: 28px;

  ${(props) => {
    if (!props.roleMemberCount) {
      return css`
        background: linear-gradient(137.26deg, #ffca02 0%, #648d00 104.28%);
      `;
    }

    return css`
      background: #47b561;
      opacity: 80%;
    `;
  }}
`;
