import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../../../styles/colors";
import { TEAM_PARTY_MEMBER_STATUS } from "../../../../@types/model/fieldType";
import { roleDetailText, teamCategoryText, teamStateTagText } from "../../../../services/convertValueToName";
import MoreIcon from "../../../../assets/icons/more.png";
import { MyJoinedTeamType } from "../../../../@types/dto/myJoinedTeamType";
import ConfirmModal from "../../components/confirmModal";
import { setAppliedTeamCancelApi } from "../../../../api/myPages/setAppliedTeamCancelApi";

export default function MyJoinedTeamItem({
  teamId,
  teamCategory,
  title,
  memo,
  createdAt,
  roleDetail,
  memberStatus,
  contact,
}: MyJoinedTeamType) {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [myTeamState, setMyTeamState] = useState<TEAM_PARTY_MEMBER_STATUS>("apply");
  const onCancelWaiting = async () => {
    await setAppliedTeamCancelApi(teamId);
    setMyTeamState("deny");
  };

  const year = createdAt.slice(0, 4);
  const month = createdAt.slice(5, 7);
  const date = createdAt.slice(8, 10);
  const createdDate = year + "." + month + "." + date;

  useEffect(() => {
    setMyTeamState(memberStatus);
  }, []);

  return (
    <>
      {isCancelModalOpen && (
        <ConfirmModal
          title="완두콩 대기를 취소하시겠습니까?"
          rightButtonLabel="아니요"
          leftButtonLabel="네"
          onClickRightButton={() => setIsCancelModalOpen(!isCancelModalOpen)}
          onClickLeftButton={onCancelWaiting}
        />
      )}
      <Container isDescriptionOpen={isDescriptionOpen} myTeamState={myTeamState}>
        <span className="date-wrapper">{createdDate}</span>
        <div className="content-wrapper">
          <div className="inner-content-wrapper">
            <div className="header-wrapper">
              <span className="category-wrapper">{teamCategoryText(teamCategory)}</span>
              <span className="state-tag">{teamStateTagText(myTeamState)}</span>
            </div>
            <p className="title-wrapper">{title}</p>
            <div className="description-wrapper">
              <div className="contents">
                <span>내콩:</span>
                <p>{roleDetailText(roleDetail)}</p>
              </div>
              <div className="contents">
                <span>나의 메시지:</span>
                <p>{memo}</p>
              </div>
              {memberStatus === "allow" && (
                <div className="contents">
                  <span>연락 수단:</span>
                  <p>{contact}</p>
                </div>
              )}
            </div>
          </div>
          <button className="open-description-button" onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
            <div className="description-button-icon" />
          </button>
        </div>
        {myTeamState === "apply" && (
          <button className="waiting-deny-button" onClick={onCancelWaiting}>
            대기 취소
          </button>
        )}
      </Container>
    </>
  );
}

const Container = styled.section<{ isDescriptionOpen: boolean; myTeamState: TEAM_PARTY_MEMBER_STATUS }>`
  margin: 12px 20px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.subBrand50};

  span.date-wrapper {
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    color: ${colors.subBrand400};
  }

  div.content-wrapper {
    position: relative;
    height: ${(props) => (props.isDescriptionOpen ? "auto" : "76px")};
    margin-top: 6px;
    padding: 13px 12px;
    border-radius: 8px;
    background: ${colors.white};
    overflow: hidden;

    div.inner-content-wrapper {
      padding-bottom: 40px;

      div.header-wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;

        span.category-wrapper {
          font-size: 12px;
          font-weight: 400;
          line-height: 17px;
          color: ${colors.grey600};
        }

        span.state-tag {
          padding: 3px 8px;
          border-radius: 50px;
          background: ${(props) => {
            switch (props.myTeamState) {
              case "apply":
                return colors.brand300;
              case "allow":
                return colors.brand900;
              case "deny":
                return colors.grey200;
              case "expired":
                return colors.red;
            }
          }};
          font-size: 12px;
          font-weight: 700;
          line-height: 17px;
          color: ${colors.white};
        }
      }

      p.title-wrapper {
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        color: ${colors.grey900};
      }

      div.description-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;

        div.contents {
          display: flex;

          span {
            margin-right: 6px;
            min-width: 63px;
            font-size: 13px;
            font-weight: 500;
            line-height: 16px;
            color: ${colors.grey900};
          }

          p {
            font-size: 13px;
            font-weight: 400;
            line-height: 16px;
            color: ${colors.grey900};
            word-break: break-all;
          }
        }
      }
    }
    button.open-description-button {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      padding: 0;
      background: ${colors.white};
      border: none;
      border-radius: 0 0 8px 8px;
      cursor: pointer;

      div.description-button-icon {
        width: 16px;
        height: 16px;
        background: transparent url(${MoreIcon}) center/ 16px no-repeat;
        transform: ${(props) => (props.isDescriptionOpen ? "rotate(180deg)" : "none")};
        transition: all 0.2s ease-in-out;
      }
    }
  }

  button.waiting-deny-button {
    margin-top: 12px;
    width: 100%;
    padding: 11px;
    border-radius: 8px;
    border: none;
    background: ${colors.brand300};
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    color: ${colors.grey900};
    cursor: pointer;
  }
`;
