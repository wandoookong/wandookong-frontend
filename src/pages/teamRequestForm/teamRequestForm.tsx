import React, { useState } from "react";
import { Navigation } from "./components/navigation/navigation";
import SetCategoryStep from "./components/steps/setCategoryStep";
import SetTitleStep from "./components/steps/setTitleStep";
import SetMyPositionStep from "./components/steps/setMyPositionStep";
import SetPositionStep from "./components/steps/setPositionStep";
import SetDescriptionStep from "./components/steps/setDescriptionStep";
import SetContactStep from "./components/steps/setContactStep";
import { useTeamRequestFormReducer } from "./hooks/useTeamRequestFormReducer";
import TeamApi from "../../api/teamApi";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import FloatingModal from "../../components/modal/FloatingModal";

export default function TeamRequestForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [isSuccessModalOn, setIsSuccessModalOn] = useState<boolean>(false);
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
    const response = await TeamApi.setTeam(state);
    if (response.result) {
      return alert("완두콩이 생성되지 않았습니다. 다시 시도해주세요.");
    }
    setIsSuccessModalOn(!isSuccessModalOn);
    return;
  };

  return (
    <Container>
      {isSuccessModalOn && (
        <FloatingModal
          title="완두콩이 생성되었습니다"
          content=""
          buttonLabel="확인"
          onClickButton={() => navigate("/")}
          onClose={() => navigate("/")}
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
