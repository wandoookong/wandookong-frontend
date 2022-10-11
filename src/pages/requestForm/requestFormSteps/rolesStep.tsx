import React, { ChangeEvent, useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { roles, rolesValidation } from "../validation/validation";
import { Header } from "../../../components/form/header/header";
import ErrorMessage from "../../../components/form/errorMessage";
import { roleData } from "./roleData";
import { useRequestFormReducer } from "../hooks/useRequestFormReducer";
import { DoubleButton } from "../../../components/form/button/doubleButton";
import { Wrapper } from "../../../components/form/radioButton/circleRadioButton";
import { CircleCheckbox } from "../../../components/form/CircleCheckboxButton";

interface Props {
  myRole: Role;
  members: AcceptableMembers;
  onChangeMembers(value: keyof AcceptableMembers): void;
  onPrevious(): void;
  onNext(): void;
}

export default function RolesStep({ members, myRole, onChangeMembers, onNext, onPrevious }: Props) {
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChangeMembers(e.currentTarget.value as keyof AcceptableMembers);

  const onNextStep = () => {
    const rolesErrorMessage = rolesValidation(members);
    setErrorMessage(rolesErrorMessage);
    if (roles.validation(members)) {
      onNext();
    }
  };

  useEffect(() => {
    if (!isEmpty(members)) {
      setErrorMessage("");
    }
  }, [members]);

  return (
    <>
      <Header title={`함께 하고 싶은 멤버 콩을 \n 선택해주세요`} />
      {!isEmpty(errorMessage) && <ErrorMessage text={errorMessage} />}
      <Wrapper>
        {roleData.map((role) => (
          <CircleCheckbox
            key={role.id}
            label={role.label}
            value={role.value}
            checked={members[role.value] === 1}
            onChange={onChange}
            disabled={myRole === role.value}
          />
        ))}
      </Wrapper>
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </>
  );
}
