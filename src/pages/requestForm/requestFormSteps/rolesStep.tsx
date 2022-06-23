import React, { ChangeEvent, useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { roles, rolesValidation } from "./validation";
import { DoubleButton } from "../../../components/Form/button";
import { Header } from "../../../components/Form/header";
import ErrorMessage from "../../../components/Form/errorMessage";
import { CircleCheckbox } from "../../../components/Form/radioButton";
import { roleData } from "./roleData";
import { useRequestFormReducer } from "../hooks/useRequestFormReducer";

interface Props {
  onPrevious(): void;
  onNext(): void;
}

export default function RolesStep({ onNext, onPrevious }: Props) {
  const { state, onChangeMembers } = useRequestFormReducer();
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChangeMembers(e.currentTarget.value as keyof AcceptableMembers);

  const onNextStep = () => {
    const rolesErrorMessage = rolesValidation(state.members);
    setErrorMessage(rolesErrorMessage);
    if (roles.validation(state.members)) {
      onNext();
    }
  };

  useEffect(() => {
    if (!isEmpty(state.members)) {
      setErrorMessage("");
    }
  }, [state.members]);

  return (
    <>
      <Header title={`함께 하고 싶은 콩을 \n 선택해주세요`} />
      {roleData.map((role) => (
        <CircleCheckbox
          key={role.id}
          label={role.label}
          value={role.value}
          checked={state.members[role.value] === 1}
          onChange={onChange}
          disabled={state.myRole === role.value}
        />
      ))}
      {!isEmpty(errorMessage) && <ErrorMessage text={errorMessage} />}
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </>
  );
}
