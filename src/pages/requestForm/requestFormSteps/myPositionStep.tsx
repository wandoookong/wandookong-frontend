import React, { useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { myRoleValidation, onChangeRequestInfos } from "./validation";
import { DoubleButton } from "../../../components/Form/button";
import { Header } from "../../../components/Form/header";
import ErrorMessage from "../../../components/Form/errorMessage";
import { CircleRadioButton } from "../../../components/Form/radioButton";

export default function MyPositionStep({ formInfos, stepController, setForm: setFormInfos }) {
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e) => {
    const myRole = onChangeRequestInfos(e);
    setFormInfos({ ...formInfos, myRole });
  };

  const onNextStep = () => {
    const myRoleErrorMessage = myRoleValidation(formInfos.myRole);
    setErrorMessage(myRoleErrorMessage);
    if (!isEmpty(formInfos.myRole)) {
      stepController.setStep(stepController.step + 1);
    }
  };

  const onPrevStep = () => {
    stepController.setStep(stepController.step - 1);
  };

  useEffect(() => {
    if (!isEmpty(formInfos.myRole)) {
      setErrorMessage("");
    }
  }, [formInfos.myRole]);

  const roleData = [
    { key: 1, label: "앱 개발자", value: "app" },
    { key: 2, label: "웹 프론트", value: "web_front" },
    { key: 3, label: "백엔드 개발자", value: "back_end" },
    { key: 4, label: "UX/UI 디자이너", value: "ux_ui" },
    { key: 5, label: "서비스 기획자", value: "pm" },
  ];

  return (
    <>
      <Header title="아이린님의 포지션은 무엇인가요?" />
      {roleData.map((role) => (
        <CircleRadioButton
          key={role.key}
          label={role.label}
          value={role.value}
          checked={formInfos.myRole === role.value ? true : false}
          onChange={onChange}
        />
      ))}
      {!isEmpty(errorMessage) && <ErrorMessage text={errorMessage} />}
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevStep} onNextStep={onNextStep} />
    </>
  );
}
