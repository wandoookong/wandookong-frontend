import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { DdayTimer } from "../../../components/ddayTimer/DdayTimer";
import { colors } from "../../../styles/colors";
import { teamCategoryText } from "../../../services/convertValueToName";
import { CreatedTeam } from "../../../@types/dto/getHomeTeam";
import { convertValueToImageUrl } from "../../../services/convertValueToImageUrl";
import { ROLE_DETAIL } from "../../../@types/model/fieldType";

interface Props {
  teamId: number;
  createdTeamItemData: CreatedTeam;
  isDday: boolean;
}

export default function CreatedTeamItem({ teamId, createdTeamItemData, isDday }: Props) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/team/${teamId}`)}>
      <div className="created-team-item-header-wrapper">
        <div className="item-header-title-wrapper">
          <span className="item-team-category">{teamCategoryText(createdTeamItemData.teamCategory)}</span>
          {isDday && <DdayTimer closeDueYmd={createdTeamItemData.closeDueYmd} currentTimestamp={Date.now()} />}
        </div>
        <h2>{createdTeamItemData.title}</h2>
      </div>
      <ul>
        {createdTeamItemData.teamCapacityList.map((position, index) => (
          <PositionItem key={index} roleMemberCount={position.roleMemberCount} roleDetail={position.roleDetail}>
            <div className="position-image" />
            <span>{position.roleDetailName}</span>
          </PositionItem>
        ))}
      </ul>
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

  div.created-team-item-header-wrapper {
    display: flex;
    flex-direction: column;

    div.item-header-title-wrapper {
      display: flex;
      justify-content: space-between;
      flex: 1 1 auto;
      overflow: hidden;

      span.item-team-category {
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
