import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

type roleMemberCount = {
  roleMemberCount: number;
};

//TODO active/inactive 표시, 디데이, 필터 api

export default function RequestItem({ teamId, content }) {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={(e) => navigate(`/${teamId}`)}>
      <TitleWrapper>
        {content.teamCategory === "portfolio" ? <p>포트폴리오</p> : <p>사이드 프로젝트</p>}
        <h2>{content.title}</h2>
      </TitleWrapper>
      <TagWrapper>
        <p>D-6</p>
      </TagWrapper>
      <RoleWrapper>
        {content.teamCapacityList.map((role) => (
          <RoleContent key={content.teamCapacityId}>
            <RoleImage roleMemberCount={role.roleMemberCount} />
            <p>{role.roleDetailName}</p>
          </RoleContent>
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
  p {
    margin: 0 0 8px 0;
    font-size: 12px;
    font-weight: 400;
    color: #3f3f3f;
  }

  h2 {
    font-size: 16px;
    margin: 0;
  }
`;

const TagWrapper = styled.div`
  position: absolute;
  padding: 3px 8px;
  top: 16px;
  right: 12px;
  background: #ddba40;
  border-radius: 40px;

  p {
    margin: 0;
    padding: 0;
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    line-height: 17px;
  }
`;

const RoleWrapper = styled.div`
  display: flex;
  margin: 12px 0 0 0;

  p {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`;
const RoleContent = styled.div`
  margin-right: 14px;
`;

const RoleImage = styled.div<roleMemberCount>`
  width: 48px;
  height: 48px;
  margin: 0;
  border-radius: 28px;
  + p {
    margin-top: 10px;
    font-wieght: 300;
    white-space: nowrap;
  }
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
