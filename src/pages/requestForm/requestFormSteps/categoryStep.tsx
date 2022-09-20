import React, { useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { categoryValidation } from "../validation/validation";
import { Header } from "../../../components/form/header/header";
import { RadioButton } from "../../../components/form/radioButton/radioButton";
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
      {!isEmpty(errorMessage) && <ErrorMessage text={errorMessage} />}
      <RadioButton
        value="portfolio"
        onChange={onChange}
        checked={state.teamCategory === "portfolio"}
        label="포트폴리오"
        description="짦은 기간동안 진행되는 프로젝트입니다. 비슷한 포지션이나 목표를 갖고 있는 콩들과 색다른 경험을 쌓을 수 있어요. "
      />
      <RadioButton
        value="side_project"
        onChange={onChange}
        checked={state.teamCategory === "side_project"}
        label="사이드 프로젝트"
        description="운영까지 이뤄지는 서비스를 만드는 프로젝트입니다. 다양한 포지션 콩들과 협업할 수 있습니다."
      />
      <SingleButton label="다음" onClick={onNextStep} />
    </>
  );
}
