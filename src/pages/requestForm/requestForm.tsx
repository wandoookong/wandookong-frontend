import React, { useState } from "react";
import { Navigation } from "../../components/form/navigation";
import CategoryStep from "./requestFormSteps/categoryStep";
import TitleStep from "./requestFormSteps/titleStep";
import MyRoleStep from "./requestFormSteps/myRoleStep";
import RolesStep from "./requestFormSteps/rolesStep";
import DescriptionStep from "./requestFormSteps/descriptionStep";
import Contact from "./requestFormSteps/contact";
import Layout from "../../components/layout/layout";
import { useRequestFormReducer } from "./hooks/useRequestFormReducer";
import { useNavigate } from "react-router-dom";

export default function RequestForm() {
  const [step, setStep] = useState(1);
  const {
    state,
    onChangeTeamCategory,
    onChangeTitle,
    onChangeRole,
    onChangeMembers,
    onChangeDescription,
    onChangeContact,
  } = useRequestFormReducer();

  const navigate = useNavigate();
  const onPreviousHandler = () => setStep((step) => step - 1);
  const onNextHandler = () => setStep((step) => step + 1);
  const onSubmit = () => {
    //TODO api 쏘는게 성공했다면 알러트
    alert("완두콩이 생성되었습니다.");
    navigate("/");
  };
  //TODO error message 노출위치 서브 타이틀로 변경하기

  return (
    <Layout>
      <Navigation step={step} />
      <form onSubmit={(e) => e.preventDefault()}>
        {step === 1 && (
          <CategoryStep
            category={state.teamCategory}
            onChange={onChangeTeamCategory}
            onPrevious={onPreviousHandler}
            onNext={onNextHandler}
          />
        )}
        {step === 2 && (
          <TitleStep
            title={state.title}
            onChangeTitle={onChangeTitle}
            onPrevious={onPreviousHandler}
            onNext={onNextHandler}
          />
        )}
        {step === 3 && (
          <MyRoleStep
            myRole={state.myRole}
            onChangeRole={onChangeRole}
            onPrevious={onPreviousHandler}
            onNext={onNextHandler}
          />
        )}
        {step === 4 && (
          <RolesStep
            myRole={state.myRole}
            members={state.members}
            onChangeMembers={onChangeMembers}
            onPrevious={onPreviousHandler}
            onNext={onNextHandler}
          />
        )}
        {step === 5 && (
          <DescriptionStep
            description={state.description}
            onChangeDescription={onChangeDescription}
            onPrevious={onPreviousHandler}
            onNext={onNextHandler}
          />
        )}
        {step === 6 && (
          <Contact
            contact={state.contact}
            onChangeContact={onChangeContact}
            onPrevious={onPreviousHandler}
            onNext={onSubmit}
          />
        )}
      </form>
    </Layout>
  );
}
