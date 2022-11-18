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

  return (
    <Container onClick={() => navigate(`/team/${teamId}`)}>
      <div className="top-wrapper">
        <div className="title-wrapper">
          <span className="team-category">
            {content.teamCategory === "portfolio" ? "포트폴리오" : "사이드 프로젝트"}
          </span>
          <DdayPill closeDueYmd={content.closeDueYmd} />
        </div>
        <h2>{content.title}</h2>
      </div>

      <ul>
        {content.teamCapacityList.map((position, index) => (
          <PositionItem key={index} roleMemberCount={position.roleMemberCount}>
            <div className="position-image" />
            <span>{position.roleDetailName}</span>
          </PositionItem>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  margin: 20px;
  padding: 16px 12px 22px 12px;
  background: ${colors.white};
  border-radius: 8px;
  cursor: pointer;

  div.top-wrapper {
    display: flex;
    flex-direction: column;

    div.title-wrapper {
      display: flex;
      justify-content: space-between;
      flex: 1 1 auto;
      overflow: hidden;

      span.team-category {
        font-size: 12px;
        font-weight: 400;
        line-height: 17px;
        color: ${colors.grey600};
      }
    }
    h2 {
      margin-top: 2px;
      font-size: 16px;
      line-height: 19px;
      color: ${colors.grey900};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-all;
    }
  }

  ul {
    display: flex;
    gap: 14px;
    margin: 12px 0 0 0;
    max-width: 48px;
    word-break: keep-all;
  }
`;

const PositionItem = styled.li<roleMemberCount>`
  display: flex;
  flex-direction: column;
  align-items: center;

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
