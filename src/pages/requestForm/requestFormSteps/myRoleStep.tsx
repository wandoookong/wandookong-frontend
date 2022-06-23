import React, { ChangeEvent, useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { myRoleValidation } from "./validation";
import { DoubleButton } from "../../../components/Form/button";
import { Header } from "../../../components/Form/header";
import ErrorMessage from "../../../components/Form/errorMessage";
import { CircleRadioButton } from "../../../components/Form/radioButton";
import { roleData } from "./roleData";
import { useRequestFormReducer } from "../hooks/useRequestFormReducer";

interface Props {
  onPrevious(): void;
  onNext(): void;
}

export default function MyRoleStep({ onNext, onPrevious }: Props) {
  const { state, onChangeRole } = useRequestFormReducer();
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => onChangeRole(e.currentTarget.value as Role);
  const onNextStep = () => {
    const myRoleErrorMessage = myRoleValidation(state.myRole);
    setErrorMessage(myRoleErrorMessage);
    if (!isEmpty(state.myRole)) {
      onNext();
    }
  };

  useEffect(() => {
    if (!isEmpty(state.myRole)) {
      setErrorMessage("");
    }
  }, [state.myRole]);

  return (
    <>
      <Header title={`아이린님의 포지션은 \n 무엇인가요?`} />
      {roleData.map((role) => (
        <CircleRadioButton
          key={role.id}
          label={role.label}
          value={role.value}
          checked={state.myRole === role.value}
          onChange={onChange}
        />
      ))}
      {!isEmpty(errorMessage) && <ErrorMessage text={errorMessage} />}
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </>
  );
}
