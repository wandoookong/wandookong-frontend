import React, { ChangeEvent, useEffect, useState } from "react";
import { descriptionValidation } from "./validation";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { Header } from "../../../components/form/header/header";
import ErrorMessage from "../../../components/form/errorMessage";
import { useRequestFormReducer } from "../hooks/useRequestFormReducer";
import { DoubleButton } from "../../../components/form/button/doubleButton";
import { TextArea } from "../../../components/form/textInput/multiText";

interface Props {
  onPrevious(): void;
  onNext(): void;
}

export default function DescriptionStep({ onNext, onPrevious }: Props) {
  const { state, onChangeDescription } = useRequestFormReducer();
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => onChangeDescription(e.currentTarget.value);

  const onNextStep = () => {
    const descriptionErrorMessage = descriptionValidation(state.description);
    setErrorMessage(descriptionErrorMessage);
    if (!isEmpty(state.description)) {
      onNext();
    }
  };

  useEffect(() => {
    if (!isEmpty(state.description)) {
      setErrorMessage("");
    }
  }, [state.description]);

  return (
    <div>
      <Header title={`완두콩에 대해 \n 조금 더 알려주시겠어요?`} />
      <ErrorMessage text={errorMessage} />
      {/*TODO textarea style 작성*/}
      <TextArea
        placeholder="완두콩의 목표, 팀 문화, 자격요건 등 자유롭게 작성해주세요! "
        onChange={onChange}
        value={state.description}
      />
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </div>
  );
}
