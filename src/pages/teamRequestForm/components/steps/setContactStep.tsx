import React, { ChangeEvent, useEffect, useState } from "react";
import { contactValidation } from "../../validations/teamRequestFormValidations";
import { SingleTextInput } from "../inputs/singleTextInput";
import { isEmpty } from "../../../../@types/utility/typeGuard";
import { DoubleButton } from "../../../../components/buttons/doubleButton";
import { FormHeader } from "../../../../components/form/header/formHeader";
import { ContentWrapper } from "../layout/contentWrapper";

interface Props {
  contact: string;
  onChangeContact(value: string): void;
  onPrevious(): void;
  onNext(): void;
}

export default function SetContactStep({ contact, onChangeContact, onNext, onPrevious }: Props) {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => onChangeContact(e.currentTarget.value);

  const onSubmit = () => {
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
      <FormHeader
        title={`모집 후 콩들과 사용하실 \n 연락 수단을 알려주세요!`}
        description="해당 정보는 수락한 멤버 콩들 한테만 공개됩니다."
        errorMessage={errorMessage}
      />
      <ContentWrapper>
        <SingleTextInput
          value={contact}
          placeholder="카톡 ID, 이메일, 오픈 채팅 링크 등을 첨부해주세요."
          onChange={onChange}
        />
      </ContentWrapper>
      <DoubleButton prevLabel="이전" nextLabel="완료" onPrevStep={onPrevious} onNextStep={onSubmit} />
    </>
  );
}
