import React, { useState } from "react";
import { Navigation } from "./components/navigation/navigation";
import SetCategoryStep from "./components/steps/setCategoryStep";
import SetTitleStep from "./components/steps/setTitleStep";
import SetMyPositionStep from "./components/steps/setMyPositionStep";
import SetPositionStep from "./components/steps/setPositionStep";
import SetDescriptionStep from "./components/steps/setDescriptionStep";
import SetContactStep from "./components/steps/setContactStep";
import { useTeamRequestFormReducer } from "./hooks/useTeamRequestFormReducer";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import FloatingModal from "../../components/modal/FloatingModal";
import { setTeamApi } from "../../api/generateTeam/setTeamApi";
import { SetTeamResponse } from "../../@types/dto/setTeam";

export default function TeamRequestForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isFailModalOn, setIsFailModalOn] = useState(false);
  const [isSuccessModalOn, setIsSuccessModalOn] = useState(false);
  const [currentOpenTeamId, setCurrentOpenTeamId] = useState(0);
  const {
    state,
    onChangeTeamCategory,
    onChangeTitle,
    onChangeRole,
    onChangeMembers,
    onChangeDescription,
    onChangeContact,
  } = useTeamRequestFormReducer();

  const onPreviousHandler = () => setStep((step) => step - 1);
  const onNextHandler = () => setStep((step) => step + 1);
  const onSubmit = async () => {
    const response: SetTeamResponse = await setTeamApi(state);
    if (!response.result) {
      setIsFailModalOn(!isFailModalOn);
      setCurrentOpenTeamId(response.teamId);
      return;
    }
    setIsSuccessModalOn(!isSuccessModalOn);
    return;
  };

  return (
    <Container>
      {isSuccessModalOn && (
        <FloatingModal
          title="완두콩을 성공적으로 만들었습니다!"
          content={`만드신 완두콩에 대한 상세정보와 \n 참여신청자는 [마이페이지]에서 \n 확인하실 수 있습니다.`}
          modalIcon="check"
          buttonLabel="확인"
          onClickButton={() => navigate("/")}
          onClose={() => navigate("/")}
          showClose={false}
        />
      )}
      {isFailModalOn && (
        <FloatingModal
          title="아직 모집중인 완두콩이 있습니다!"
          content={`현재 모집중인 완두콩이 마감되어야 \n 새로운 완두콩을 만들 수 있습니다. \n 모집중인 완두콩으로 이동하시겠습니까?`}
          modalIcon="exclamation"
          prevLabel="아니요"
          nextLabel="네"
          onPrev={() => setIsFailModalOn(!isFailModalOn)}
          onNext={() => navigate(`/team/${currentOpenTeamId}`)}
          onClose={() => setIsFailModalOn(!isFailModalOn)}
          showClose={false}
        />
      )}
      <Navigation step={step} />
      <form onSubmit={(e) => e.preventDefault()}>
        {step === 1 && (
          <SetCategoryStep
            category={state.teamCategory}
            onChange={onChangeTeamCategory}
            onPrevious={onPreviousHandler}
            onNext={onNextHandler}
          />
        )}
        {step === 2 && (
          <SetTitleStep
            title={state.title}
            onChangeTitle={onChangeTitle}
            onPrevious={onPreviousHandler}
            onNext={onNextHandler}
          />
        )}
        {step === 3 && (
          <SetMyPositionStep
            myPosition={state.myRole}
            onChangeRole={onChangeRole}
            onPrevious={onPreviousHandler}
            onNext={onNextHandler}
          />
        )}
        {step === 4 && (
          <SetPositionStep
            myPosition={state.myRole}
            member={state.member}
            onChangeMembers={onChangeMembers}
            onPrevious={onPreviousHandler}
            onNext={onNextHandler}
          />
        )}
        {step === 5 && (
          <SetDescriptionStep
            description={state.description}
            onChangeDescription={onChangeDescription}
            onPrevious={onPreviousHandler}
            onNext={onNextHandler}
          />
        )}
        {step === 6 && (
          <SetContactStep
            contact={state.contact}
            onChangeContact={onChangeContact}
            onPrevious={onPreviousHandler}
            onNext={onSubmit}
          />
        )}
      </form>
    </Container>
  );
}

const Container = styled.div`
  form {
    position: relative;
    margin-top: 114px;
  }
`;
