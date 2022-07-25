import React, { ChangeEvent, useEffect, useState } from "react";
import { Header } from "../../../components/form/header/header";
import { contactValidation } from "./validation";
import { TextInput } from "../../../components/form/textInput/textInput";
import { isEmpty } from "../../../@types/utility/typeGuard";
import ErrorMessage from "../../../components/form/errorMessage";
import { useRequestFormReducer } from "../hooks/useRequestFormReducer";
import { DoubleButton } from "../../../components/form/button/doubleButton";

interface Props {
  onPrevious(): void;
  onNext(): void;
}

export default function Contact({ onNext, onPrevious }: Props) {
  const { state, onChangeContact } = useRequestFormReducer();
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => onChangeContact(e.currentTarget.value);

  const onNextStep = () => {
    const contactErrorMessage = contactValidation(state.contact);
    setErrorMessage(contactErrorMessage);
    if (!isEmpty(state.contact)) {
      onNext();
    }
  };

  useEffect(() => {
    if (!isEmpty(state.contact)) {
      setErrorMessage("");
    }
  }, [state.contact]);

  return (
    <>
      <Header title={`모집 후 어디로 연락하면 될까요?`} />
      <ErrorMessage text={errorMessage} />
      <TextInput
        value={state.contact}
        onChange={onChange}
        placeholder="카톡 ID, 이메일, 오픈 채팅 링크 등을 첨부해주세요."
      />
      <DoubleButton prevLabel="이전" nextLabel="완두콩 만들기" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </>
  );
}
