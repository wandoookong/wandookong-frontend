import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { DdayPill } from "../../../components/pill/DdayPill";
import { colors } from "../../../styles/colors";
import { teamCategoryText } from "../../../services/convertValueToName";
import { HomeTeam } from "../../../@types/dto/getHomeTeam";
import { convertValueToImageUrl } from "../../../services/convertValueToImageUrl";
import { ROLE_DETAIL } from "../../../@types/model/fieldType";

interface Props {
  teamId: number;
  teamData: HomeTeam;
  isDday: boolean;
}

export default function TeamItem({ teamId, teamData, isDday }: Props) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/team/${teamId}`)}>
      <div className="top-wrapper">
        <div className="title-wrapper">
          <span className="team-category">{teamCategoryText(teamData.teamCategory)}</span>
          {isDday && <DdayPill closeDueYmd={teamData.closeDueYmd} currentTimestamp={Date.now()} />}
        </div>
        <h2>{teamData.title}</h2>
      </div>
      <ul>
        {teamData.teamCapacityList.map((position, index) => (
          <PositionItem key={index} roleMemberCount={position.roleMemberCount} roleDetail={position.roleDetail}>
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

const PositionItem = styled.li<{ roleMemberCount: number; roleDetail: ROLE_DETAIL }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  div.position-image {
    width: 48px;
    height: 48px;
    margin: 0;
    border-radius: 28px;
    background: transparent url(${(props) => convertValueToImageUrl(props.roleDetail)}) center / 100% no-repeat;
    filter: grayscale(${(props) => (!props.roleMemberCount ? 0 : 1)});
  }
  span {
    margin-top: 10px;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    color: ${(props) => (!props.roleMemberCount ? colors.grey900 : colors.grey200)};
    line-height: 17px;
  }
`;
