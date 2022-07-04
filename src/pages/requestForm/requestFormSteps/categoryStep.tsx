import React, { useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { categoryValidation } from "./validation";
import { Header } from "../../../components/form/header/header";
import { RadioButton } from "../../../components/form/radioButton";
import ErrorMessage from "../../../components/form/errorMessage";
import { useRequestFormReducer } from "../hooks/useRequestFormReducer";
import { SingleButton } from "../../../components/form/button/singleButton";

interface Props {
  onPrevious(): void;
  onNext(): void;
}

export default function CategoryStep({ onNext }: Props) {
  const { state, onChangeTeamCategory } = useRequestFormReducer();
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e) => onChangeTeamCategory(e.currentTarget.value);

  const onNextStep = () => {
    const categoryErrorMessage = categoryValidation(state.teamCategory);
    setErrorMessage(categoryErrorMessage);
    if (!isEmpty(state.teamCategory)) {
      onNext();
    }
  };

  useEffect(() => {
    if (!isEmpty(state.teamCategory)) {
      setErrorMessage("");
    }
  }, [state.teamCategory]);

  return (
    <>
      <Header title={`어떤 완두콩을 \n 만들고 싶으신가요?`} />
      <RadioButton
        value="portfolio"
        onChange={onChange}
        checked={state.teamCategory === "portfolio"}
        label="포트폴리오"
        description="짧은 기간동안 진행되는 프로젝트입니다."
      />
      <RadioButton
        value="side_project"
        onChange={onChange}
        checked={state.teamCategory === "side_project"}
        label="사이드 프로젝트"
        description="비즈니스 운영도 같이 진행하는 프로젝트입니다."
      />
      {!isEmpty(errorMessage) && <ErrorMessage text={errorMessage} />}
      <SingleButton label="다음" onClick={onNextStep} />
    </>
  );
}
