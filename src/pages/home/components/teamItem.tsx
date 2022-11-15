import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { TeamReturnType } from "../../../api/types/teamType";
import { DdayPill } from "../../../components/pill/DdayPill";
import { colors } from "../../../components/styles/colors";

type roleMemberCount = {
  roleMemberCount: number;
};

interface Props {
  teamId: number;
  content: TeamReturnType;
}

export default function TeamItem({ teamId, content }: Props) {
  const navigate = useNavigate();

  //FIXME DDAY 태그 컴포넌트
  return (
    <Container onClick={(e) => navigate(`/team/${teamId}`)}>
      <div className="title-wrapper">
        {content.teamCategory === "portfolio" ? <span>포트폴리오</span> : <span>사이드 프로젝트</span>}
        <h2>{content.title}</h2>
      </div>
      <DdayPill closeDueYmd={content.closeDueYmd} />
      <div className="position-wrapper">
        {content.teamCapacityList.map((position, index) => (
          <div key={index}>
            <PositionImage roleMemberCount={position.roleMemberCount} />
            <span>{position.roleDetailName}</span>
          </div>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 20px;
  padding: 16px 12px 22px 12px;
  background: ${colors.white};
  border-radius: 8px;

  div.title-wrapper {
    span {
      font-size: 12px;
      font-weight: 400;
      color: ${colors.grey600};
    }

    h2 {
      margin-top: 8px;
      font-size: 16px;
      color: ${colors.grey900};
    }
  }

  div.position-wrapper {
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
      color: ${colors.grey900};
      white-space: nowrap;
    }
  }
`;

const PositionImage = styled.div<roleMemberCount>`
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
      background: ${colors.brand900};
      opacity: 80%;
    `;
  }}
`;
