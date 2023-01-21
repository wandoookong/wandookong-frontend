import { useNavigate, useParams } from "react-router-dom";
import { SingleButton } from "../../components/buttons/singleButton";
import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
import { MultiTextInput } from "../../components/form/textInput/multiText";
import { css } from "@emotion/react";
import DialogueModal from "../../components/modal/DialogueModal";
import CommonModalHeader from "../../components/header/commonModalHeader";
import { colors } from "../../styles/colors";
import CheckIcon from "../../assets/icons/select-grey900.svg";
import { teamCategoryText } from "../../services/convertValueToName";
import { DdayTimer } from "../../components/ddayTimer/DdayTimer";
import { TeamDetailType } from "../../@types/dto/getTeamDetail";
import { getTeamDetailApi } from "../../api/teamDetail/getTeamDetailApi";
import { ApplyTeamForm } from "../../@types/dto/setApplyTeam";
import { setApplyTeamApi } from "../../api/teamDetail/setApplyTeamApi";
import teamApplyValidation from "./utilities/teamApplyValidation";
import { isEmpty } from "../../@types/utility/typeGuard";
import { convertValueToImageUrl } from "../../services/convertValueToImageUrl";
import { ROLE_DETAIL } from "../../@types/model/fieldType";

export default function ApplyTeam() {
  const navigate = useNavigate();
  const param = useParams();
  const [errorMessages, setErrorMessages] = useState({ position: "", memo: "" });
  const [teamDetailData, setTeamDetailData] = useState<TeamDetailType>({
    closeDueYmd: "",
    description: "",
    teamCapacityList: [
      {
        roleDetail: "product",
        roleDetailName: "",
        roleMaxCount: 1,
        teamCapacityId: 1,
        teamLead: false,
        careerRangeName: "",
        careerRange: "0_4",
        tagList: [""],
      },
    ],
    teamCategory: "portfolio",
    teamDetailStatus: "ready",
    teamId: 1,
    teamStatus: "open",
    title: "",
  });
  const [applyTeamFormData, setApplyTeamFormData] = useState<ApplyTeamForm>({ roleDetail: "", memo: "" });
  const [isSuccessModalOn, setSuccessModalOn] = useState(false);

  const computedPositions = useMemo(() => {
    return teamDetailData.teamCapacityList.filter((team) => !team.careerRangeName);
  }, [teamDetailData]);

  const onChangePosition = (e) => {
    setApplyTeamFormData({ roleDetail: e.currentTarget.value, memo: applyTeamFormData.memo });
  };

  const onChangeMemo = (e) => {
    setApplyTeamFormData({ ...applyTeamFormData, memo: e.currentTarget.value });
  };

  const onSubmit = async () => {
    try {
      const validation = teamApplyValidation(applyTeamFormData);
      setErrorMessages({ ...validation });
      if (validation.position) {
        return window.scrollTo({ top: 70, behavior: "smooth" });
      }
      if (validation.memo) {
        return window.scrollTo({ top: 280, behavior: "smooth" });
      }
      if (isEmpty(validation.position) && isEmpty(validation.memo)) {
        const response = await setApplyTeamApi(Number(param.teamId), applyTeamFormData);
        if (response.result) {
          setSuccessModalOn(!isSuccessModalOn);
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (applyTeamFormData.roleDetail) {
      setErrorMessages({ ...errorMessages, position: "" });
    }
  }, [applyTeamFormData.roleDetail]);

  useEffect(() => {
    if (applyTeamFormData.memo) {
      setErrorMessages({ ...errorMessages, memo: "" });
    }
  }, [applyTeamFormData.memo]);

  useEffect(() => {
    (async function () {
      const response = await getTeamDetailApi(Number(param.teamId));
      setTeamDetailData(response);
    })();
  }, [param.teamId]);

  return (
    <Container isPositionErrorMessageOn={errorMessages.position}>
      {isSuccessModalOn && (
        <DialogueModal
          title="참여 신청했습니다!"
          content={`리더가 참여를 수락하면 \n 해당 완두콩의 연락 정보가 공개됩니다. \n 조금만 기다려주세요. `}
          modalIcon="check"
          singleButtonLabel="확인"
          onClickSingleButton={() => navigate("/")}
          onClose={() => setSuccessModalOn(!isSuccessModalOn)}
          showCloseButton={false}
        />
      )}
      <CommonModalHeader onClick={() => navigate(-1)} />
      <main>
        <div className="apply-team-header-wrapper">
          <div className="title-wrapper">
            <p>{teamCategoryText(teamDetailData.teamCategory)}</p>
            <DdayTimer closeDueYmd={teamDetailData.closeDueYmd} currentTimestamp={Date.now()} />
          </div>
          <h1>{teamDetailData.title}</h1>
        </div>
        <section>
          <h2>참여하고 싶은 포지션의 콩을 선택해주세요</h2>
          {errorMessages.position && <p className="error-message">{errorMessages.position}</p>}
          <ul>
            {computedPositions.map((position, index) => (
              <PositionWrapper
                key={index}
                isChecked={applyTeamFormData.roleDetail === position.roleDetail}
                position={position.roleDetail}
              >
                <label>
                  <input
                    type="radio"
                    name="roleDetail"
                    value={position.roleDetail}
                    onChange={onChangePosition}
                    checked={applyTeamFormData.roleDetail === position.roleDetail}
                  />
                  <div className="title-wrapper">
                    <div className="position-image" />
                    {position.roleDetailName + " 콩 모집 중이에요"}
                  </div>
                </label>
              </PositionWrapper>
            ))}
          </ul>
        </section>
        <section>
          <h2>메시지</h2>
          <MultiTextInput
            value={applyTeamFormData.memo}
            onChange={onChangeMemo}
            maxLength={100}
            placeholder="보유스킬, 지원동기, 참여 목표를 자유롭게 작성해주세요!"
          />
          {errorMessages.memo && <p className="error-message">{errorMessages.memo}</p>}
        </section>
      </main>
      <SingleButton label="참여하기" onClick={onSubmit} isActive={true} />
    </Container>
  );
}

const Container = styled.div<{ isPositionErrorMessageOn: string }>`
  position: relative;
  padding-bottom: 50px;

  main {
    padding: 80px 20px;

    div.apply-team-header-wrapper {
      display: flex;
      flex-direction: column;
      margin: 0 0 23px 0;
      padding: 0;

      div.title-wrapper {
        display: flex;
        justify-content: space-between;

        p {
          padding: 0;
          font-size: 12px;
          font-weight: 400;
          line-height: 17px;
          letter-spacing: -0.005em;
          text-align: left;
        }
      }

      h1 {
        margin-top: 5px;
        padding: 0;
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0;
        text-align: left;
        word-break: break-all;
      }
    }

    p.error-message {
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
      color: ${colors.red};
    }

    section {
      margin-bottom: 28px;

      ul {
        margin-top: ${(props) => (props.isPositionErrorMessageOn ? "12px" : 0)};
      }
    }

    h2 {
      margin-bottom: ${(props) => (props.isPositionErrorMessageOn ? "7px" : "12px")};
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

const PositionWrapper = styled.li<{ isChecked: boolean; position: ROLE_DETAIL }>`
  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 0 9px 0;
    padding: 11px 14px 10px 14px;
    height: 71px;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0;
    color: ${colors.grey900};
    cursor: pointer;

    ${(props) => {
      if (!props.isChecked) {
        return css`
          box-shadow: 0 0 0 2px ${colors.brand400} inset;
        `;
      }
      return css`
        background: ${colors.brand300} url(${CheckIcon}) top 23px right 15px / 24px no-repeat;
        box-shadow: none;
      `;
    }}
    div.title-wrapper {
      display: flex;
      align-items: center;

      div.position-image {
        display: inline-block;
        width: 50px;
        height: 50px;
        margin: 0 6px 0 0;
        border-radius: 28px;
        background: transparent url(${(props) => convertValueToImageUrl(props.position)}) center / 100% no-repeat;
      }
    }

    input {
      display: none;
    }
  }
`;
