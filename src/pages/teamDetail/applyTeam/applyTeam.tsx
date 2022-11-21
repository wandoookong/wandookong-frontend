import { useNavigate, useParams } from "react-router-dom";
import { SingleButton } from "../../../components/buttons/singleButton";
import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
import { MultiTextInput } from "../../../components/form/textInput/multiText";
import { css } from "@emotion/react";
import FloatingModal from "../../../components/modal/FloatingModal";
import TeamApplyResultModal from "./components/teamApplyResultModal";
import CommonModalHeader from "../../../components/header/commonModalHeader";
import { colors } from "../../../styles/colors";
import CheckIcon from "../../../assets/icons/select-grey900.svg";
import { teamCategoryText } from "../../../services/convertValueToName";
import { DdayPill } from "../../../components/pill/DdayPill";
import { TeamDetailType } from "../../../@types/dto/getTeamDetail";
import { getTeamDetailApi } from "../../../api/teamDetail/getTeamDetailApi";
import { APPLY_TEAM_ERROR_STATUS, ApplyTeamErrorModal, ApplyTeamForm } from "../../../@types/dto/setApplyTeam";
import { setApplyTeamApi } from "../../../api/teamDetail/setApplyTeamApi";

//TODO 폼에 제대로 작성했는지 validation 돌리기

export default function ApplyTeam() {
  const navigate = useNavigate();
  const param = useParams();
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
  const [applyTeamFormData, setApplyTeamFormData] = useState<ApplyTeamForm>({ roleDetail: "product", memo: "" });
  const [isSuccessModalOn, setSuccessModalOn] = useState(false);
  const [isErrorModalOn, setErrorModalOn] = useState<ApplyTeamErrorModal>({ state: false, status: "pending" });

  const computedPositions = useMemo(() => {
    return teamDetailData.teamCapacityList.filter((team) => !team.careerRangeName);
  }, [teamDetailData]);

  const errorModalContent = (status: APPLY_TEAM_ERROR_STATUS) => {
    switch (status) {
      case "pending":
        return {
          title: "이미 참여 신청한 완두콩이에요!",
          content: "리더가 아직 참여 수락을 하지 않았어요. \n 조금만 더 기다려주세요.",
        };
      case "team_lead":
        return {
          title: "참여자 기다리는 중이에요!",
          content: `해당 완두콩의 상세 화면은 ‘마이페이지’ -> ‘내가 만든 \n 완두콩 보기'에서 확인 가능해요.`,
        };
      default:
        return { title: "다시 시도해주세요", content: "" };
    }
  };

  const onChangePosition = (e) => {
    setApplyTeamFormData({ roleDetail: e.currentTarget.value, memo: applyTeamFormData.memo });
  };

  const onChangeMemo = (e) => {
    setApplyTeamFormData({ ...applyTeamFormData, memo: e.currentTarget.value });
  };

  const onSubmit = async () => {
    try {
      const response = await setApplyTeamApi(Number(param.teamId), applyTeamFormData);
      if (response.result) {
        setSuccessModalOn(!isSuccessModalOn);
        return;
      }
      if (response.teamDetailStatus === "pending") {
        setErrorModalOn({ state: !isErrorModalOn.state, status: "pending" });
        return;
      }
      if (response.teamDetailStatus === "team_lead") {
        setErrorModalOn({ state: !isErrorModalOn.state, status: "team_lead" });
        return;
      }
    } catch (e) {
      throw new Error();
    }
  };

  useEffect(() => {
    (async function () {
      const response = await getTeamDetailApi(Number(param.teamId));
      setTeamDetailData(response);
    })();
  }, [param.teamId]);

  return (
    <Container>
      {isErrorModalOn.state && (
        <TeamApplyResultModal
          title={errorModalContent(isErrorModalOn.status).title}
          content={errorModalContent(isErrorModalOn.status).content}
          onClick={() => setErrorModalOn({ ...isErrorModalOn, state: !isErrorModalOn.state })}
        />
      )}
      {isSuccessModalOn && (
        <FloatingModal
          title="참여 신청했습니다!"
          content={`리더가 참여를 수락하면 \n 해당 완두콩의 연락 정보가 공개됩니다. \n 조금만 기다려주세요. `}
          buttonLabel="확인"
          onClickButton={() => navigate("/")}
          onClose={() => setSuccessModalOn(!isSuccessModalOn)}
          showClose={false}
        />
      )}
      <CommonModalHeader onClick={() => navigate(-1)} />
      <main>
        <TitleWrapper>
          <div className="title-wrapper">
            <p>{teamCategoryText(teamDetailData.teamCategory)}</p>
            <DdayPill closeDueYmd={teamDetailData.closeDueYmd} currentTimestamp={Date.now()} />
          </div>
          <h1>{teamDetailData.title}</h1>
        </TitleWrapper>
        <section>
          <h2>참여하고 싶은 포지션의 콩을 선택해주세요</h2>
          <ul>
            {computedPositions.map((position, index) => (
              <PositionWrapper key={index} isChecked={applyTeamFormData.roleDetail === position.roleDetail}>
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
        </section>
      </main>
      <SingleButton label="참여하기" onClick={onSubmit} isActive={true} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding-bottom: 50px;

  main {
    padding: 108px 20px 80px;

    section {
      margin-bottom: 28px;
    }

    h2 {
      margin-bottom: 12px;
      font-size: 18px;
      font-weight: 700;
    }
  }
`;

const TitleWrapper = styled.div`
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
`;

const PositionWrapper = styled.li<{ isChecked: boolean }>`
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
        background: ${colors.grey900};
      }
    }

    input {
      display: none;
    }
  }
`;
