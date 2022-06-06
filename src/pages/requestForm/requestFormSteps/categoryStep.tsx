import React, { useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { categoryValidation, onChangeRequestInfos } from "./validation";
import { SingleButton } from "../../../components/Form/button";
import { Header } from "../../../components/Form/header";
import { RadioButton } from "../../../components/Form/radioButton";
import ErrorMessage from "../../../components/Form/errorMessage";

export default function CategoryStep({ formInfos, stepController, setForm: setFormInfos }) {
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e) => {
    const category = onChangeRequestInfos(e);
    setFormInfos({ ...formInfos, category });
  };

  const onNextStep = () => {
    const categoryErrorMessage = categoryValidation(formInfos.category);
    setErrorMessage(categoryErrorMessage);
    if (!isEmpty(formInfos.category)) {
      stepController.setStep(stepController.step + 1);
    }
  };

  useEffect(() => {
    if (!isEmpty(formInfos.category)) {
      setErrorMessage("");
    }
  }, [formInfos.category]);

  return (
    <>
      <Header title={`어떤 완두콩을 만들고 싶으신가요?`} />
      <RadioButton
        value="portfolio"
        onChange={onChange}
        checked={formInfos.category === "portfolio" ? true : false}
        label="포트폴리오"
        description="짧은 기간동안 진행되는 프로젝트입니다."
      />
      <RadioButton
        value="side-project"
        onChange={onChange}
        checked={formInfos.category === "side-project" ? true : false}
        label="사이드 프로젝트"
        description="비즈니스 운영도 같이 진행하는 프로젝트입니다."
      />
      {!isEmpty(errorMessage) && <ErrorMessage text={errorMessage} />}
      <SingleButton label="다음" onClick={onNextStep} />
    </>
  );
}
