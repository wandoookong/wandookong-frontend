import React, { useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { myRoleValidation, onChangeRequestInfos } from "./validation";
import { DoubleButton } from "../../../components/Form/button";
import { Header } from "../../../components/Form/header";
import ErrorMessage from "../../../components/Form/errorMessage";
import { CircleRadioButton } from "../../../components/Form/radioButton";
import { roleData } from "./roleData";

export default function MyRoleStep({ formInfos, stepController, setForm: setFormInfos }) {
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e) => {
    const myRole = onChangeRequestInfos(e);
    setFormInfos({ ...formInfos, myRole });
    if (formInfos.roles.includes(myRole)) {
      const rolesList = formInfos.roles.filter((role) => role !== myRole);
      setFormInfos({ ...formInfos, roles: [...rolesList] });
    }
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

  return (
    <>
      <Header title="아이린님의 포지션은 무엇인가요?" />
      {roleData.map((role) => (
        <CircleRadioButton
          key={role.id}
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
