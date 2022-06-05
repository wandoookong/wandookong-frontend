import React, { useEffect, useState } from "react";
import { isEmpty } from "../../@types/utility/typeGuard";
import { onChangeCategory, categoryValidation } from "./validation";
import Button from "../../components/Form/button";
import { Header } from "../../components/Form/header";

export default function CategoryStep({ formInfos, stepController, setForm }) {
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e) => {
    const category = onChangeCategory(e);
    setForm({ ...formInfos, ...category });
  };

  const onNext = () => {
    const categoryErrorMessage = categoryValidation(formInfos.category);
    setErrorMessage(categoryErrorMessage);
    if (!isEmpty(formInfos.category)) {
      stepController.setStep(stepController.step + 1);
    }
  };

  useEffect(() => {
    if (!isEmpty(formInfos.category)) {
      setErrorMessage("");
    }
  }, [formInfos.category]);

  return (
    <>
      <Header />
      <label>
        <input
          type="radio"
          name="category"
          value="portfolio"
          checked={formInfos.category === "portfolio" ? true : false}
          onChange={onChange}
        />
        포트폴리오
        <p>간단한 설명이 들어갑니다.</p>
      </label>
      <label>
        <input
          type="radio"
          name="category"
          value="side-project"
          checked={formInfos.category === "side-project" ? true : false}
          onChange={onChange}
        />
        사이드프로젝트
        <p>간단한 설명이 들어갑니다.</p>
      </label>
      {!isEmpty(errorMessage) && <p>{errorMessage}</p>}
      <button onClick={onNext}>다음</button>
      <Button />
    </>
  );
}
