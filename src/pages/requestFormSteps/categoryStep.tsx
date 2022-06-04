import React, { useEffect, useState } from "react";
import { isEmpty } from "../../@types/utility/typeGuard";
import { onChangeCategory, onNextStepValidation } from "./validation";

export default function CategoryStep({ formInfos, stepController, setForm }) {
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e) => {
    const category = onChangeCategory(e);
    setForm({ ...formInfos, ...category });
  };

  const onNext = () => {
    const categoryErrorMessage = onNextStepValidation(formInfos.category);
    setErrorMessage(categoryErrorMessage);
    next(errorMessage);
  };

  const next = (value) => {
    if (value.length === 0) {
      return stepController.setStep(stepController.step + 1);
    }
  };

  useEffect(() => {
    if (!isEmpty(formInfos.category)) {
      setErrorMessage("");
    }
  }, [formInfos.category]);

  return (
    <div>
      <h1>카테고리 선택</h1>
      <label>
        <input type="radio" name="category" value="portfolio" onChange={onChange} />
        포트폴리오
      </label>
      <label>
        <input type="radio" name="category" value="side-project" onChange={onChange} />
        사이드프로젝트
      </label>
      {!isEmpty(errorMessage) && <p>{errorMessage}</p>}
      <button onClick={onNext}>다음</button>
    </div>
  );
}
