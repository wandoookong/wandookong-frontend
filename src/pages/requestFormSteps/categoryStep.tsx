import React, { useState } from "react";
import { isEmpty } from "../../@types/utility/typeGuard";
import { onChangeCategory, onNextStep } from "./validation";

export default function CategoryStep({ formInfos, setStep }) {
  const [errorMessage, setErrorMessage] = useState("");
  const onChange = (e) => {
    setErrorMessage(onChangeCategory(e));
  };
  const onNextStep = () => {
    setStep();
  };

  return (
    <div>
      <h1>카테고리 선택</h1>
      <label>
        <input
          type="radio"
          name="category"
          value="portfolio"
          checked={formInfos.category === "portfolio" ? true : false}
          onChange={onChange}
        />
        포트폴리오
      </label>
      <label>
        <input
          type="radio"
          name="category"
          value="sideProject"
          checked={formInfos.category === "sideProject" ? true : false}
          onChange={onChange}
        />
        사이드프로젝트
      </label>
      {!isEmpty(errorMessage) && <p>{errorMessage}</p>}
      <button name="category" onClick={onNextStep}>
        다음
      </button>
    </div>
  );
}
