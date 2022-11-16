import { useNavigate, useParams } from "react-router-dom";
import { SingleButton } from "../../components/buttons/singleButton";
import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
import TeamApi from "../../api/teamApi";
import { MultiTextInput } from "../../components/form/textInput/multiText";
import { ROLE_DETAIL } from "../../api/types/fieldType";
import { css } from "@emotion/react";
import CheckIcon from "@mui/icons-material/Check";
import FloatingModal from "../../components/modal/FloatingModal";
import TeamApplyResultModal from "./components/teamApplyResultModal";
import CommonModalHeader from "../../components/header/commonModalHeader";
import { colors } from "../../styles/colors";

interface ApplyTeamForm {
  roleDetail: ROLE_DETAIL;
  memo: string;
}

interface ErrorModal {
  state: boolean;
  status: ErrorStatus;
}

interface HiringPosition {
  teamCapacityId: number;
  roleDetail: string;
  roleDetailName: string;
  roleMaxCount: number;
  teamLead: boolean;
  careerRange: string;
  careerRangeName: string;
  tagList: string[];
}

type ErrorStatus = "pending" | "";


//TODO setter 바로 팀 포지션만 가져오고 메모이제이션, 폼에 제대로 작성했는지 validation 돌리기

export default function ApplyTeam() {
  const navigate = useNavigate();
  const param = useParams();
  const [teamData, setTeamData] = useState<TeamData>({
    teamId: 1,
    title: "",
    description: "",
    closeDueYmd: "",
    teamStatus: "",
    teamCapacityList: [
      {
        teamCapacityId: 0,
        roleDetail: "",
        roleDetailName: "",
        roleMaxCount: 0,
        teamLead: true,
        careerRange: "",
        careerRangeName: "",
        tagList: [""],
      },
    ],
    teamDetailStatus: "",
  });
  const [hiringPosition, setHiringPosition] = useState<HiringPosition[]>([
    {
      teamCapacityId: 0,
      roleDetail: "",
      roleDetailName: "",
      roleMaxCount: 0,
      teamLead: true,
      careerRange: "",
      careerRangeName: "",
      tagList: [""],
    },
  ]);
  const [formContent, setFormContent] = useState<ApplyTeamForm>({ roleDetail: "product", memo: "" });
  const [isSuccessModalOn, setSuccessModalOn] = useState(false);
  const [isErrorModalOn, setErrorModalOn] = useState<ErrorModal>({ state: false, status: "pending" });
  const computedPositions = useMemo(
    () => setHiringPosition(teamData.teamCapacityList.filter((team) => !team.careerRangeName)),
    [teamData],
  );

  const errorModalContent = (status: ErrorStatus) => {
    switch (status) {
      case "pending":
        return {
          title: "이미 참여 신청한 완두콩이에요!",
          content: "리더가 아직 참여 수락을 하지 않았어요. \n 조금만 더 기다려주세요.",
        };
      default:
        return { title: "다시 시도해주세요", content: "" };
    }
  };

  const onChangePosition = (e) => {
    setFormContent({ roleDetail: e.currentTarget.value, memo: formContent.memo });
  };

  const onChangeMemo = (e) => {
    setFormContent({ ...formContent, memo: e.currentTarget.value });
  };

  const onSubmit = async () => {
    try {
      const response = await TeamApi.applyTeam(Number(param.teamId), formContent);
      if (response.result) {
        setSuccessModalOn(!isSuccessModalOn);
        return;
      }
      if (response.teamDetailStatus === "pending") {
        setErrorModalOn({ state: !isErrorModalOn.state, status: "pending" });
        return;
      }
    } catch (e) {
      throw new Error();
    }
  };

  useEffect(() => {
    (async function () {
      const response = await TeamApi.getTeamData(Number(param.teamId));
      setTeamData(response);
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
          <div>
            <p>포트폴리오</p>
            <h1>{teamData.title}</h1>
          </div>
          <span>D-6</span>
        </TitleWrapper>
        <section>
          <h2>참여하고 싶은 포지션의 콩을 선택해주세요</h2>
          {hiringPosition.map((position, index) => (
            <PositionWrapper key={index} checked={formContent.roleDetail === position.roleDetail}>
              <input
                type="radio"
                name="roleDetail"
                value={position.roleDetail}
                onChange={onChangePosition}
                checked={formContent.roleDetail === position.roleDetail}
              />
              <div className="title-wrapper">
                <div className="position-image" />
                {position.roleDetailName + " 콩 모집 중이에요"}
              </div>
              {formContent.roleDetail === position.roleDetail && <CheckIcon sx={{ fontSize: 24, m: 0 }} />}
            </PositionWrapper>
          ))}
        </section>
        <section>
          <h2>메시지</h2>
          <MultiTextInput
            value={formContent.memo}
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
  margin: 0 0 23px 0;
  padding: 0;
  justify-content: space-between;

  p {
    margin: 0 0 5px 0;
    padding: 0;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: -0.005em;
    text-align: left;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0;
    text-align: left;
  }

  span {
    height: 100%;
    margin: 0;
    padding: 3px 8px;
    border-radius: 40px;
    background: #ddba40;
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    line-height: 17px;
  }
`;

const PositionWrapper = styled.label<{ checked: boolean }>`
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
  color: #242c35;
  cursor: pointer;

  ${(props) => {
    if (!props.checked) {
      return css`
        box-shadow: 0 0 0 2px #95be8d inset;
      `;
    }
    return css`
      background: #afd89e;
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
`;
