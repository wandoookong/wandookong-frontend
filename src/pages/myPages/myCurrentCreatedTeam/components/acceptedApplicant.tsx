import { useState } from "react";
import { colors } from "../../../../styles/colors";
import { setAcceptedMemberCancelApi } from "../../../../api/myPages/myCreatedTeam/setAcceptedMemberCancelApi";
import ConfirmModal from "../../components/confirmModal";
import { careerRangeText, roleDetailText } from "../../../../services/convertValueToName";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import MoreIcon from "../../../../assets/icons/more.png";
import { MyCreatedTeamAcceptedMember } from "../../../../@types/dto/myCreatedTeamAcceptedMember";

export default function AcceptedMember({
  teamMemberId,
  nickname,
  careerRange,
  tagList,
  roleDetail,
  memo,
}: MyCreatedTeamAcceptedMember) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  const [isModalOn, setIsModalOn] = useState(false);

  const onClickCancelMember = async () => {
    try {
      const response = await setAcceptedMemberCancelApi(teamMemberId);
      setDisable(!disable);
    } catch (error) {
      throw error;
    }
  };

  return (
    <Container isDescriptionOpen={isDescriptionOpen} disable={disable}>
      {isModalOn && (
        <ConfirmModal
          title="참여자를 삭제하시겠습니까?"
          leftButtonLabel="유지하기"
          rightButtonLabel="삭제하기"
          onClickRightButton={onClickCancelMember}
          onClickLeftButton={() => setIsModalOn(!isModalOn)}
        />
      )}
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
        <button className="delete-button" onClick={() => setIsModalOn(!isModalOn)}>
          참여자 삭제
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div<{ isDescriptionOpen: boolean; disable: boolean }>`
    display: ${(props) => (props.disable ? "none" : "flex")};
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

        &.delete-button {
          background: ${colors.brand300};
          color: ${colors.grey600};
          border: none;
        }
      }
`;
