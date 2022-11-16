import React, { ChangeEvent, useEffect, useState } from "react";
import { isEmpty } from "../../../../@types/utility/typeGuard";
import { myRoleValidation } from "../../validations/teamRequestFormValidations";
import { FormHeader } from "../../../../components/form/header/formHeader";
import { roleData } from "../../utilities/roleData";
import { DoubleButton } from "../../../../components/buttons/doubleButton";
import { PositionRadioButton } from "../inputs/positionRadioButton";
import styled from "@emotion/styled";
import { ContentWrapper } from "../layout/contentWrapper";

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
      <FormHeader title={`님의 포지션은 \n 무엇인가요?`} errorMessage={errorMessage} />
      <ContentWrapper>
        <InputWrapper>
          {roleData.map((role) => (
            <PositionRadioButton
              key={role.id}
              label={role.label}
              value={role.value}
              isChecked={myPosition === role.value}
              onChange={onChange}
            />
          ))}
        </InputWrapper>
      </ContentWrapper>
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </>
  );
}

const InputWrapper = styled.div`
  display: flex;
  gap: 17px;
  width: 100%;
`;
