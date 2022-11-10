import React, { useState } from "react";
import { Navigation } from "../../components/form/navigation";
import CategoryStep from "./components/categoryStep";
import TitleStep from "./components/titleStep";
import MyRoleStep from "./components/myRoleStep";
import RolesStep from "./components/rolesStep";
import DescriptionStep from "./components/descriptionStep";
import Contact from "./components/contact";
import Layout from "../../components/layout/layout";
import { useRequestFormReducer } from "./hooks/useRequestFormReducer";
import TeamApi from "../../api/teamApi";
import { isEmpty } from "../../@types/utility/typeGuard";
import { useNavigate } from "react-router-dom";

export default function TeamRequest() {
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
  const onSubmit = async () => {
    const response = await TeamApi.setTeam(state);
    if (isEmpty(response.teamId)) {
      return alert("완두콩이 생성되지 않았습니다. 다시 시도해주세요.");
    }
    navigate("/");
    return alert("완두콩이 생성되었습니다.");
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
            member={state.member}
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
