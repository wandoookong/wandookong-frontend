import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import { useNavigate } from "react-router-dom";
import Navigation from "./components/navigation";
import NickNamePage from "./signUpForm/nickNamePage";
import PositionPage from "./signUpForm/positionPage";
import TagPage from "./signUpForm/tagPage";
import { useSignUpReducer } from "./hooks/useSignUpReducer";

export default function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const { state, onChangeNickname, onChangeRoleMain, onChangeCareerRange, onChangeTagNameList } = useSignUpReducer();

  const onPreviousHandler = () => setStep((step) => step - 1);
  const onNextHandler = () => setStep((step) => step + 1);
  const onClick = () => {
    navigate("/");
  };

  // const userSocialId = document.cookie;

  return (
    <Layout>
      <Navigation onClick={onClick} />
      <form onSubmit={(e) => e.preventDefault()}>
        {step === 1 && <NickNamePage nickname={state.nickname} onChange={onChangeNickname} onNext={onNextHandler} />}
        {step === 2 && (
          <PositionPage
            roleMain={state.roleMain}
            onChangeRoleMain={onChangeRoleMain}
            onChangeCareerRange={onChangeCareerRange}
            careerRange={state.careerRange}
            onNext={onNextHandler}
            onPrev={onPreviousHandler}
          />
        )}
        {step === 3 && (
          <TagPage
            tags={state.tagNameList}
            nickname={state.nickname}
            onChange={onChangeTagNameList}
            onNext={onNextHandler}
            onPrev={onPreviousHandler}
          />
        )}
      </form>
    </Layout>
  );
}
