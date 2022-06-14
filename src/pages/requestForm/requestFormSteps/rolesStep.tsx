import React, { useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { myRoleValidation, onChangeRequestInfos, roles, rolesValidation } from "./validation";
import { DoubleButton } from "../../../components/Form/button";
import { Header } from "../../../components/Form/header";
import ErrorMessage from "../../../components/Form/errorMessage";
import { CircleCheckbox, CircleRadioButton } from "../../../components/Form/radioButton";
import { roleData } from "./roleData";

export default function RolesStep({ formInfos, stepController, setForm: setFormInfos }) {
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e) => {
    const value = onChangeRequestInfos(e);
    if (!e.target.disabled) {
      if (e.target.checked) {
        setFormInfos({ ...formInfos, members: { ...formInfos.members, [value]: 1 } });
      } else if (!e.target.checked) {
        setFormInfos({ ...formInfos, members: { ...formInfos.members, [value]: 0 } });
      }
    }
    return;
  };

  const onNextStep = () => {
    const rolesErrorMessage = rolesValidation(formInfos.members);
    setErrorMessage(rolesErrorMessage);
    if (roles.validation(formInfos.members)) {
      stepController.setStep(stepController.step + 1);
    }
  };

  const onPrevStep = () => {
    stepController.setStep(stepController.step - 1);
  };

  useEffect(() => {
    if (!isEmpty(formInfos.members)) {
      setErrorMessage("");
    }
  }, [formInfos.members]);
  return (
    <>
      <Header title="함께 하고 싶은 콩을 선택해주세요" />
      {roleData.map((role) => (
        <CircleCheckbox
          key={role.id}
          label={role.label}
          value={role.value}
          checked={formInfos.members[role.value] === 1 ? true : false}
          onChange={onChange}
          disabled={formInfos.myRole === role.value ? true : false}
        />
      ))}
      {!isEmpty(errorMessage) && <ErrorMessage text={errorMessage} />}
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevStep} onNextStep={onNextStep} />
    </>
  );
}
