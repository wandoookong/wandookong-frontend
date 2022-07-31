import React, { ChangeEvent, useEffect, useState } from "react";
import { Header } from "../../../components/form/header/header";
import { contactValidation } from "../validation/validation";
import { TextInput } from "../../../components/form/textInput/textInput";
import { isEmpty } from "../../../@types/utility/typeGuard";
import ErrorMessage from "../../../components/form/errorMessage";
import { useRequestFormReducer } from "../hooks/useRequestFormReducer";
import { DoubleButton } from "../../../components/form/button/doubleButton";
import { HeaderSubText } from "../../../components/form/header/headerSubText";

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
      <HeaderSubText
        title={`모집 후 콩들과 사용하실 \n 연락 수단을 알려주세요! `}
        subText="해당 정보는 수락한 멤버 콩들 한테만 공개됩니다. "
      />
      <ErrorMessage text={errorMessage} />
      <TextInput
        value={state.contact}
        onChange={onChange}
        placeholder="카톡 ID, 이메일, 오픈 채팅 링크 등을 첨부해주세요."
      />
      <DoubleButton prevLabel="이전" nextLabel="완료" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </>
  );
}
