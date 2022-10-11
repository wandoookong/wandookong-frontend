import React, { ChangeEvent, useEffect, useState } from "react";
import { descriptionValidation } from "../validation/validation";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { Header } from "../../../components/form/header/header";
import ErrorMessage from "../../../components/form/errorMessage";
import { useRequestFormReducer } from "../hooks/useRequestFormReducer";
import { DoubleButton } from "../../../components/form/button/doubleButton";
import { TextArea } from "../../../components/form/textInput/multiText";

interface Props {
  description: string;
  onChangeDescription(value: string): void;
  onPrevious(): void;
  onNext(): void;
}

export default function DescriptionStep({ description, onChangeDescription, onNext, onPrevious }: Props) {
  const [errorMessage, setErrorMessage] = useState("");

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
    <div>
      <Header title={`완두콩에 대해 조금만 더 알려주시겠어요? `} />
      <ErrorMessage text={errorMessage} />
      {/*TODO textarea style 작성*/}
      <TextArea
        placeholder="완두콩의 목표, 팀 문화, 자격요건 등 자유롭게 작성해주세요! "
        onChange={onChange}
        value={description}
      />
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </div>
  );
}
