import React, { ChangeEvent, useEffect, useState } from "react";
import { isEmpty } from "../../../../@types/utility/typeGuard";
import { roles, rolesValidation } from "../../utilities/teamRequestFormValidations";
import { FormHeader } from "../../../../components/form/header/formHeader";
import { roleData } from "../../utilities/roleData";
import { DoubleButton } from "../../../../components/buttons/doubleButton";
import { PositionCheckBoxButton } from "../inputs/positionCheckBoxButton";
import styled from "@emotion/styled";
import { ContentWrapper } from "../layout/contentWrapper";
import { AcceptableMembers } from "../../../../@types/dto/setTeam";
import { ROLE_DETAIL } from "../../../../@types/model/fieldType";

interface Props {
  myPosition: ROLE_DETAIL | "";
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
      <FormHeader title={`함께 하고 싶은 멤버 콩을 \n 선택해주세요`} errorMessage={errorMessage} />
      <ContentWrapper>
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
      </ContentWrapper>
      <DoubleButton prevButtonLabel="이전" nextButtonLabel="다음" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </>
  );
}

const InputWrapper = styled.ul`
  display: flex;
  width: 100%;
  gap: 17px;
`;
