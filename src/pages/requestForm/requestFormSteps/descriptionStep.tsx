import React, { useState } from "react";
import { DoubleButton } from "../../../components/Form/button";
import { descriptionValidation, rolesValidation } from "./validation";
import { isEmpty } from "../../../@types/utility/typeGuard";

export default function DescriptionStep({ formInfos, stepController, setForm: setFormInfos }) {
  const [errorMessage, setErrorMessage] = useState("");

  const onNextStep = () => {
    // const descriptionErrorMessage = descriptionValidation(formInfos.description);
    // setErrorMessage(descriptionErrorMessage);
    // if (!isEmpty(formInfos.description)) {
    //   stepController.setStep(stepController.step + 1);
    // }
  };

  const onPrevStep = () => {
    stepController.setStep(stepController.step - 1);
  };

  return (
    <div>
      <h1>완두콩을 잘 설명할 수 있는 제목을 알려주세요.</h1>
      <textarea placeholder="어떤 콩들을 필요로 하시나요?" />
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevStep} onNextStep={onNextStep} />
    </div>
  );
}
