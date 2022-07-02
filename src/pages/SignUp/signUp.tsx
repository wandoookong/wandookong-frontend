import React, { useState } from "react";
import NickNamePage from "./signUpForm/nickNamePage";
import PositionPage from "./signUpForm/positionPage";
import TagPage from "./signUpForm/tagPage";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const onPreviousHandler = () => setStep((step) => step - 1);
  const onNextHandler = () => setStep((step) => step + 1);

  return (
    <form>
      {step === 1 && <NickNamePage onNext={onNextHandler} />}
      {step === 2 && <PositionPage onNext={onNextHandler} onPrev={onPreviousHandler} />}
      {step === 3 && <TagPage onNext={onNextHandler} onPrev={onPreviousHandler} />}
    </form>
  );
}
