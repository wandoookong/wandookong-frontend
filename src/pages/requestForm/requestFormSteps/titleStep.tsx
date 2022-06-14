import React, { useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { DoubleButton } from "../../../components/Form/button";
import { Header } from "../../../components/Form/header";
import ErrorMessage from "../../../components/Form/errorMessage";
import { TextInput } from "../../../components/Form/textInput";
import { onChangeRequestInfos, titleValidation } from "./validation";

export default function TitleStep({ formInfos, stepController, setForm }) {
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e: any) => {
    const title = onChangeRequestInfos(e);
    setForm({ ...formInfos, title });
  };

  const onNextStep = () => {
    const titleErrorMessage = titleValidation(formInfos.title);
    setErrorMessage(titleErrorMessage);
    if (!isEmpty(formInfos.title)) {
      stepController.setStep(stepController.step + 1);
    }
  };

  const onPrevStep = () => {
    stepController.setStep(stepController.step - 1);
  };

  useEffect(() => {
    if (!isEmpty(formInfos.title)) {
      setErrorMessage("");
    }
  }, [formInfos.title]);

  return (
    <>
      <Header title={`아이린님의 완두콩 제목을 알려주세요!`} />
      <TextInput placeholder="예) 완두콩 프로젝트 팀원 모집" value={formInfos.title} onChange={onChange} />
      {!isEmpty(errorMessage) && <ErrorMessage text={errorMessage} />}
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevStep} onNextStep={onNextStep} />
    </>
  );
}
