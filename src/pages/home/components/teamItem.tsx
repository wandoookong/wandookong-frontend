import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { TeamReturnType } from "../../../api/types/teamType";
import { DdayPill } from "../../../components/pill/DdayPill";
import { colors } from "../../../styles/colors";

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
    <Container onClick={() => navigate(`/team/${teamId}`)}>
      <div className="title-wrapper">
        {content.teamCategory === "portfolio" ? <span>포트폴리오</span> : <span>사이드 프로젝트</span>}
        <h2>{content.title}</h2>
      </div>
      <DdayPill closeDueYmd={content.closeDueYmd} />
      <div className="position-wrapper">
        {content.teamCapacityList.map((position, index) => (
          <PositionItem key={index} roleMemberCount={position.roleMemberCount}>
            <div className="position-image" />
            <span>{position.roleDetailName}</span>
          </PositionItem>
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
  cursor: pointer;

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
    max-width: 48px;
    word-break: keep-all;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const PositionItem = styled.div<roleMemberCount>`
  div.position-image {
    width: 48px;
    height: 48px;
    margin: 0;
    border-radius: 28px;
    background: ${(props) => (!props.roleMemberCount ? colors.grey900 : colors.grey100)};
  }
  span {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: ${(props) => (!props.roleMemberCount ? colors.grey900 : colors.grey200)};
    line-height: 17px;
  }
`;
