import React, { ChangeEvent, useEffect, useState } from "react";
import { descriptionValidation } from "../../utilities/teamRequestFormValidations";
import { isEmpty } from "../../../../@types/utility/typeGuard";
import { FormHeader } from "../../../../components/form/header/formHeader";
import { DoubleButton } from "../../../../components/buttons/doubleButton";
import { MultiTextInput } from "../../../../components/form/textInput/multiText";
import { ContentWrapper } from "../layout/contentWrapper";

interface Props {
  description: string;
  onChangeDescription(value: string): void;
  onPrevious(): void;
  onNext(): void;
}

export default function SetDescriptionStep({ description, onChangeDescription, onNext, onPrevious }: Props) {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => onChangeDescription(e.currentTarget.value);

  const onNextStep = () => {
    const descriptionErrorMessage = descriptionValidation(description);
    setErrorMessage(descriptionErrorMessage);
    if (!isEmpty(description)) {
      onNext();
    }
  };

  useEffect(() => {
    if (!isEmpty(description)) {
      setErrorMessage("");
    }
  }, [description]);

  return (
    <>
      <FormHeader title={`완두콩에 대해 조금만 더 \n 알려주시겠어요?`} errorMessage={errorMessage} />
      <ContentWrapper>
        <MultiTextInput
          placeholder="완두콩의 목표, 팀 문화, 자격요건 등 자유롭게 작성해주세요! "
          onChange={onChange}
          value={description}
          maxLength={1000}
        />
      </ContentWrapper>
      <DoubleButton prevButtonLabel="이전" nextButtonLabel="다음" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </>
  );
}
