import React, { ChangeEvent, useEffect, useState } from "react";
import { isEmpty } from "../../../../@types/utility/typeGuard";
import { myRoleValidation } from "../../utilities/teamRequestFormValidations";
import { FormHeader } from "../../../../components/form/header/formHeader";
import { roleData } from "../../utilities/roleData";
import { DoubleButton } from "../../../../components/buttons/doubleButton";
import { PositionRadioButton } from "../inputs/positionRadioButton";
import styled from "@emotion/styled";
import { ContentWrapper } from "../layout/contentWrapper";
import { ROLE_DETAIL, ROLE_MAIN } from "../../../../@types/model/fieldType";
import { getUserMyInfoApi } from "../../../../api/myPages/myPage/getUserMyInfoApi";

interface Props {
  myPosition: ROLE_DETAIL | "";
  onChangeRole(value: string): void;
  onPrevious(): void;
  onNext(): void;
}

export default function SetMyPositionStep({ myPosition, onChangeRole, onNext, onPrevious }: Props) {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => onChangeRole(e.currentTarget.value as ROLE_MAIN);
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

  useEffect(() => {
    (async function () {
      const response = await getUserMyInfoApi();
      setName(response.nickname);
    })();
  }, []);

  return (
    <>
      <FormHeader title={`${name}님의 포지션은 \n 무엇인가요?`} errorMessage={errorMessage} />
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
      <DoubleButton prevButtonLabel="이전" nextButtonLabel="다음" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </>
  );
}

const InputWrapper = styled.ul`
  display: flex;
  gap: 17px;
  width: 100%;
`;
