import React, { ChangeEvent, useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { myRoleValidation } from "../validation/validation";
import { Header } from "../../../components/form/header/header";
import ErrorMessage from "../../../components/form/errorMessage";
import { roleData } from "./roleData";
import { useRequestFormReducer } from "../hooks/useRequestFormReducer";
import { DoubleButton } from "../../../components/form/button/doubleButton";
import { CircleRadioButton, Wrapper } from "../../../components/form/radioButton/circleRadioButton";

interface Props {
  myRole: Role;
  onChangeRole(value: string): void;
  onPrevious(): void;
  onNext(): void;
}

export default function MyRoleStep({ myRole, onChangeRole, onNext, onPrevious }: Props) {
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => onChangeRole(e.currentTarget.value as Role);
  const onNextStep = () => {
    const myRoleErrorMessage = myRoleValidation(myRole);
    setErrorMessage(myRoleErrorMessage);
    if (!isEmpty(myRole)) {
      onNext();
    }
  };

  useEffect(() => {
    if (!isEmpty(myRole)) {
      setErrorMessage("");
    }
  }, [myRole]);

  return (
    <>
      <Header title={`아이린님의 포지션은 \n 무엇인가요?`} />
      {!isEmpty(errorMessage) && <ErrorMessage text={errorMessage} />}
      <Wrapper>
        {roleData.map((role) => (
          <CircleRadioButton
            key={role.id}
            label={role.label}
            value={role.value}
            checked={myRole === role.value}
            onChange={onChange}
            gradient={role.gradient}
          />
        ))}
      </Wrapper>
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </>
  );
}
