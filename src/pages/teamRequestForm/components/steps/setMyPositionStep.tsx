import React, { ChangeEvent, useEffect, useState } from "react";
import { isEmpty } from "../../../../@types/utility/typeGuard";
import { myRoleValidation } from "../../validation/teamRequestFormValidations";
import { FormHeader } from "../../../../components/form/header/formHeader";
import InputValidationErrorMessage from "../../../../components/form/inputValidationErrorMessage";
import { roleData } from "../../utilities/roleData";
import { DoubleButton } from "../../../../components/buttons/doubleButton";
import { PositionRadioButton } from "../buttons/positionRadioButton";
import styled from "@emotion/styled";

interface Props {
  myPosition: Role;
  onChangeRole(value: string): void;
  onPrevious(): void;
  onNext(): void;
}

export default function SetMyPositionStep({ myPosition, onChangeRole, onNext, onPrevious }: Props) {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => onChangeRole(e.currentTarget.value as Role);
  const onNextStep = () => {
    const myRoleErrorMessage = myRoleValidation(myPosition);
    setErrorMessage(myRoleErrorMessage);
    if (!isEmpty(myPosition)) {
      onNext();
    }
  };

  useEffect(() => {
    if (!isEmpty(myPosition)) {
      setErrorMessage("");
    }
  }, [myPosition]);

  return (
    <>
      <FormHeader title={`님의 포지션은 \n 무엇인가요?`} />
      {!isEmpty(errorMessage) && <InputValidationErrorMessage text={errorMessage} />}
      <InputWrapper>
        {roleData.map((role) => (
          <PositionRadioButton
            key={role.id}
            label={role.label}
            value={role.value}
            checked={myPosition === role.value}
            onChange={onChange}
          />
        ))}
      </InputWrapper>
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </>
  );
}

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;
