import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../../../styles/colors";
import MoreIcon from "../../../../assets/icons/more.png";
import { css } from "@emotion/react";
import { careerRangeText, roleDetailText } from "../../../../services/convertValueToName";
import { setApplicantAcceptApi } from "../../../../api/myPages/myCreatedTeam/setApplicantAcceptApi";
import { setApplicantRejectApi } from "../../../../api/myPages/myCreatedTeam/setApplicantRejectApi";
import { MyCreatedTeamPendingMember } from "../../../../@types/dto/myCreatedTeamPendingMember";
import ToastPopUp from "./toastPopUp";

export default function PendingMember({
  teamMemberId,
  nickname,
  careerRange,
  tagList,
  roleDetail,
  memo,
  memberStatus,
}: MyCreatedTeamPendingMember) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isToastPopUpOpen, setIsToastPopUpOpen] = useState(false);
  const [disable, setDisable] = useState(false);

  const onClickAccept = async () => {
    try {
      const response = await setApplicantAcceptApi(teamMemberId);
      setDisable(!disable);
      window.location.reload();
      setIsToastPopUpOpen(!isToastPopUpOpen);
    } catch (error) {
      throw error;
    }
  };

  const onClickReject = async () => {
    try {
      const response = await setApplicantRejectApi(teamMemberId);
      setDisable(!disable);
      window.location.reload();
      setIsToastPopUpOpen(!isToastPopUpOpen);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsToastPopUpOpen(!isToastPopUpOpen);
    }, 3000);
  }, [isToastPopUpOpen]);

  return (
    <>
      {isToastPopUpOpen && <ToastPopUp message={`${nickname}님을 수락했습니다.`} buttonLabel="완두콩 상세보기" />}
      <Container isDescriptionOpen={isDescriptionOpen} disabled={disable}>
        <div className="applicant-content-wrapper">
          <div className="box-content-wrapper">
            <div>
              <div className="applicant-header-wrapper">
                <b>{nickname}</b>
                <span>
                  {roleDetailText(roleDetail)}, {careerRangeText(careerRange)}
                </span>
              </div>
              <ul>
                {tagList.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
            <p className="description-wrapper">{memo}</p>
          </div>
          <button className="open-description" onClick={() => setIsDescriptionOpen(!isDescriptionOpen)} />
        </div>
        <div className="button-wrapper">
          <button className="decline-button" onClick={onClickReject}>
            거절
          </button>
          <button className="accept-button" onClick={onClickAccept}>
            수락
          </button>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div<{ isDescriptionOpen: boolean; disabled: boolean }>`
    display: ${(props) => (props.disabled ? "none" : "flex")};
    flex-direction: column;
    border-bottom: 1px solid ${colors.subBrand50};

  div.applicant-content-wrapper {
      display: flex;
      flex-direction: column;
      padding: 16px 14px;
      border-radius: 8px;
      background: ${colors.white};

      div.box-content-wrapper {
        
      }
        div.applicant-header-wrapper {
          display: flex;
          justify-content: space-between;

          b {
            font-size: 14px;
            font-weight: 700;
            line-height: 17px;
            color: ${colors.grey900};
          }

          span {
            font-size: 12px;
            font-weight: 400;
            line-height: 14px;
            color: ${colors.grey600};
          }
        }

        ul {
          display: flex;
          gap: 5px;
          margin: 13px 0 8px 0;

          li {
            padding: 4px 8px;
            border: 1px solid ${colors.grey100};
            border-radius: 50px;
            font-size: 12px;
            font-weight: 400;
            line-height: 14px;
            color: ${colors.grey900};
          }
        }

        p.description-wrapper {
          display: -webkit-box;
          font-size: 12px;
          font-weight: 400;
          line-height: 14px;
          color: ${colors.grey900};
          
          ${(props) => {
            if (!props.isDescriptionOpen) {
              return css`
                overflow: hidden;
                word-break: break-all;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              `;
            }
          }}
      }

      button.open-description {
        margin-top: 8px;
        height: 16px;
        border: none;
        background: transparent url(${MoreIcon}) center / 16px no-repeat;
        transform: ${(props) => (props.isDescriptionOpen ? "rotate(180deg)" : "none")};
        transition: all 0.2s ease-in-out;
        cursor: pointer;
      }
    }

    div.button-wrapper {
      display: flex;
      gap: 10px;
      margin: 10px 0 20px 0;

      button {
        flex: 1 1 50%;
        padding: 11px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        cursor: pointer;

        &.decline-button {
          background: transparent;
          color: ${colors.grey600};
          border: 1px solid ${colors.brand400};
        }
        &.accept-button {
          border: none;
          background: ${colors.brand900};
          color: ${colors.white};
        }
      }
`;
