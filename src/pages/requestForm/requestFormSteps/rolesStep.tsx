import React, { useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { myRoleValidation, onChangeRequestInfos, rolesValidation } from "./validation";
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
        setFormInfos({ ...formInfos, roles: [...formInfos.roles, value] });
      } else if (!e.target.checked) {
        const rolesList = formInfos.roles.filter((role) => role !== value);
        setFormInfos({ ...formInfos, roles: [...rolesList] });
      }
    }
    return;
  };

  const onNextStep = () => {
    const rolesErrorMessage = rolesValidation(formInfos.roles);
    setErrorMessage(rolesErrorMessage);
    if (!isEmpty(formInfos.roles)) {
      stepController.setStep(stepController.step + 1);
    }
  };

  const onPrevStep = () => {
    stepController.setStep(stepController.step - 1);
  };

  useEffect(() => {
    if (!isEmpty(formInfos.roles)) {
      setErrorMessage("");
    }
  }, [formInfos.roles]);

  return (
    <>
      <Header title="함께 하고 싶은 콩을 선택해주세요" />
      {roleData.map((role) => (
        <CircleCheckbox
          key={role.id}
          label={role.label}
          value={role.value}
          checked={formInfos.roles.includes(role.value) ? true : false}
          onChange={onChange}
          disabled={role.value == formInfos.myRole ? true : false}
        />
      ))}
      {!isEmpty(errorMessage) && <ErrorMessage text={errorMessage} />}
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevStep} onNextStep={onNextStep} />
    </>
  );
}
