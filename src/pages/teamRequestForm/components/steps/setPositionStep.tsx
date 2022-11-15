import React, { ChangeEvent, useEffect, useState } from "react";
import { isEmpty } from "../../../../@types/utility/typeGuard";
import { roles, rolesValidation } from "../../validation/teamRequestFormValidations";
import { FormHeader } from "../../../../components/form/header/formHeader";
import InputValidationErrorMessage from "../../../../components/form/inputValidationErrorMessage";
import { roleData } from "../../utilities/roleData";
import { DoubleButton } from "../../../../components/buttons/doubleButton";
import { PositionCheckBoxButton } from "../buttons/positionCheckBoxButton";
import styled from "@emotion/styled";

interface Props {
  myPosition: Role;
  member: AcceptableMembers;
  onChangeMembers(value: keyof AcceptableMembers): void;
  onPrevious(): void;
  onNext(): void;
}

export default function SetPositionStep({ member, myPosition, onChangeMembers, onNext, onPrevious }: Props) {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChangeMembers(e.currentTarget.value as keyof AcceptableMembers);

  const onNextStep = () => {
    const rolesErrorMessage = rolesValidation(member);
    setErrorMessage(rolesErrorMessage);
    if (roles.validation(member)) {
      onNext();
    }
  };

  useEffect(() => {
    if (!isEmpty(member)) {
      setErrorMessage("");
    }
  }, [member]);

  return (
    <>
      <FormHeader title={`함께 하고 싶은 멤버 콩을 \n 선택해주세요`} />
      {!isEmpty(errorMessage) && <InputValidationErrorMessage text={errorMessage} />}
      <InputWrapper>
        {roleData.map((role, index) => (
          <PositionCheckBoxButton
            key={index}
            label={role.label}
            value={role.value}
            onChange={onChange}
            isChecked={member[role.value] === 1}
            isDisabled={myPosition === role.value}
          />
        ))}
      </InputWrapper>
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </>
  );
}

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
`;
