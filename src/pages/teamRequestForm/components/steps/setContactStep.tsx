import React, { ChangeEvent, useEffect, useState } from "react";
import { contactValidation } from "../../validation/teamRequestFormValidations";
import { SingleTextInput } from "../inputs/singleTextInput";
import { isEmpty } from "../../../../@types/utility/typeGuard";
import InputValidationErrorMessage from "../../../../components/form/inputValidationErrorMessage";
import { DoubleButton } from "../../../../components/buttons/doubleButton";
import { HeaderSubText } from "../../../../components/form/header/headerSubText";

interface Props {
  contact: string;
  onChangeContact(value: string): void;
  onPrevious(): void;
  onNext(): void;
}

export default function SetContactStep({ contact, onChangeContact, onNext, onPrevious }: Props) {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => onChangeContact(e.currentTarget.value);

  const onNextHandler = () => {
    const contactErrorMessage = contactValidation(contact);
    setErrorMessage(contactErrorMessage);
    if (!isEmpty(contact)) {
      onNext();
    }
  };

  useEffect(() => {
    if (!isEmpty(contact)) {
      setErrorMessage("");
    }
  }, [contact]);

  return (
    <>
      <HeaderSubText
        title={`모집 후 콩들과 사용하실 \n 연락 수단을 알려주세요!`}
        subText="해당 정보는 수락한 멤버 콩들 한테만 공개됩니다."
      />
      <InputValidationErrorMessage text={errorMessage} />
      <SingleTextInput
        value={contact}
        onChange={onChange}
        placeholder="카톡 ID, 이메일, 오픈 채팅 링크 등을 첨부해주세요."
      />
      <DoubleButton prevLabel="이전" nextLabel="완료" onPrevStep={onPrevious} onNextStep={onNextHandler} />
    </>
  );
}
