import React, { useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { categoryValidation } from "../validation/validation";
import { Header } from "../../../components/form/header/header";
import { RadioButton } from "../../../components/form/radioButton/radioButton";
import ErrorMessage from "../../../components/form/errorMessage";
import { SingleButton } from "../../../components/form/button/singleButton";
import styled from "@emotion/styled";

interface Props {
  category: TeamCategory;
  onPrevious(): void;
  onNext(): void;
  onChange(category: TeamCategory): void;
}

export default function CategoryStep({ onNext, onChange, category }: Props) {
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeHandler = (e) => onChange(e.currentTarget.value);

  const onNextStep = (e) => {
    const categoryErrorMessage = categoryValidation(category);
    setErrorMessage(categoryErrorMessage);
    if (!isEmpty(category)) {
      onNext();
    }
  };

  useEffect(() => {
    if (!isEmpty(category)) {
      setErrorMessage("");
    }
  }, [category]);

  return (
    <>
      <Header title={`어떤 완두콩을 \n 만들고 싶으신가요?`} />
      {!isEmpty(errorMessage) && <ErrorMessage text={errorMessage} />}
      <Wrapper>
        <RadioButton
          value="portfolio"
          onChange={onChangeHandler}
          checked={category === "portfolio"}
          label="포트폴리오"
          description="짦은 기간동안 진행되는 프로젝트입니다. 비슷한 포지션이나 목표를 갖고 있는 콩들과 색다른 경험을 쌓을 수 있어요. "
        />
        <RadioButton
          value="side_project"
          onChange={onChangeHandler}
          checked={category === "side_project"}
          label="사이드 프로젝트"
          description="운영까지 이뤄지는 서비스를 만드는 프로젝트입니다. 다양한 포지션 콩들과 협업할 수 있습니다."
        />
      </Wrapper>
      <SingleButton label="다음" onClick={onNextStep} isActive={true} />
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 260px;
  left: 20px;
  right: 20px;
  margin: 0;
  padding: 0;
`;
