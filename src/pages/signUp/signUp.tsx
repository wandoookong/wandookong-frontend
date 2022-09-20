import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import { useNavigate } from "react-router-dom";
import Navigation from "./components/navigation";
import NickNamePage from "./signUpForm/nickNamePage";
import PositionPage from "./signUpForm/positionPage";
import TagPage from "./signUpForm/tagPage";

export default function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const onPreviousHandler = () => setStep((step) => step - 1);
  const onNextHandler = () => setStep((step) => step + 1);

  const onClick = () => {
    navigate("/");
  };

  return (
    <Layout>
      <Navigation onClick={onClick} />
      <form>
        {step === 1 && <NickNamePage onNext={onNextHandler} />}
        {step === 2 && <PositionPage onNext={onNextHandler} onPrev={onPreviousHandler} />}
        {step === 3 && <TagPage onNext={onNextHandler} onPrev={onPreviousHandler} />}
      </form>
    </Layout>
  );
}
