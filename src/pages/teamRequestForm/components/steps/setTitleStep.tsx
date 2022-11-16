import React, { ChangeEvent, useEffect, useState } from "react";
import { isEmpty } from "../../../../@types/utility/typeGuard";
import { FormHeader } from "../../../../components/form/header/formHeader";
import { SingleTextInput } from "../inputs/singleTextInput";
import { titleValidation } from "../../validations/teamRequestFormValidations";
import { DoubleButton } from "../../../../components/buttons/doubleButton";
import { ContentWrapper } from "../layout/contentWrapper";

interface Props {
  title: string;
  onChangeTitle(value: string): void;
  onPrevious(): void;
  onNext(): void;
}

export default function SetTitleStep({ title, onChangeTitle, onPrevious, onNext }: Props) {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => onChangeTitle(e.currentTarget.value);

  const onNextStep = () => {
    const titleErrorMessage = titleValidation(title);
    setErrorMessage(titleErrorMessage);
    if (!isEmpty(title)) {
      onNext();
    }
  };

  useEffect(() => {
    if (!isEmpty(title)) {
      setErrorMessage("");
    }
  }, [title]);

  return (
    <>
      <FormHeader title={`완두콩 제목을 알려주세요!`} errorMessage={errorMessage} />
      <ContentWrapper>
        <SingleTextInput
          placeholder="함께 재미난 프로젝트 하실 분들 찾습니다! :)"
          value={title}
          maxLength={20}
          onChange={onChange}
        />
      </ContentWrapper>
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </>
  );
}
