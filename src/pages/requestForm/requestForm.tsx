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

export default function RequestForm() {
  const [step, setStep] = useState(1);
  const { state, onChangeTeamCategory } = useRequestFormReducer();

  const onPreviousHandler = () => setStep((step) => step - 1);
  const onNextHandler = () => setStep((step) => step + 1);
  const onSubmit = () => {
    // TODO api 호출
    alert("완두콩이 생성되었습니다.");
  };

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
        {step === 2 && <TitleStep onPrevious={onPreviousHandler} onNext={onNextHandler} />}
        {step === 3 && <MyRoleStep onPrevious={onPreviousHandler} onNext={onNextHandler} />}
        {step === 4 && <RolesStep onPrevious={onPreviousHandler} onNext={onNextHandler} />}
        {step === 5 && <DescriptionStep onPrevious={onPreviousHandler} onNext={onNextHandler} />}
        {step === 6 && <Contact onPrevious={onPreviousHandler} onNext={onSubmit} />}
      </form>
    </Layout>
  );
}
