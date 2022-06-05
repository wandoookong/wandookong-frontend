import React, { useEffect, useState } from "react";
import MediaQuery from "react-responsive";
import BackNavigation from "../components/Navigation/backNavigation";
import CategoryStep from "./requestFormSteps/categoryStep";

export default function RequestForm() {
  const [step, setStep] = useState(1);
  const stepController = { step, setStep };
  const [formInfos, setFormInfos] = useState({
    category: "",
    title: "",
    position: "",
    description: "",
    contact: "",
  });

  useEffect(() => {
    console.log(formInfos);
  }, [formInfos]);

  const onNext = () => {
    setStep(step + 1);
  };

  const onPrev = () => {
    setStep(step - 1);
  };

  const onSubmit = () => {};

  return (
    <div>
      <MediaQuery maxWidth={360}>
        <BackNavigation />
        {step === 1 && <CategoryStep formInfos={formInfos} setForm={setFormInfos} stepController={stepController} />}
        {step === 2 && (
          <div>
            <h1>완두콩을 잘 설명할 수 있는 제목을 알려주세요.</h1>
            <input type="text" placeholder="해커톤을 가장 완두콩 모집" />
            <button onClick={onPrev}>이전</button>
            <button onClick={onNext}>다음</button>
          </div>
        )}
        {step === 3 && (
          <div>
            <h1>어떤 콩들이 필요한가요?</h1>
            <label>
              <input type="checkbox" name="position" value="appDeveloper" />앱 개발자
            </label>
            <label>
              <input type="checkbox" name="position" value="webDeveloper" />웹 개발자
            </label>
            <label>
              <input type="checkbox" name="position" value="backendDeveloper" />
              백엔드 개발자
            </label>
            <label>
              <input type="checkbox" name="position" value="uxuiDesigner" />
              UX/UI 디자이너
            </label>
            <label>
              <input type="checkbox" name="position" value="productOwner" />
              서비스 기획자
            </label>
            <button onClick={onPrev}>이전</button>
            <button onClick={onNext}>다음</button>
          </div>
        )}
        {step === 4 && (
          <div>
            <h1>완두콩을 잘 설명할 수 있는 제목을 알려주세요.</h1>
            <textarea placeholder="어떤 콩들을 필요로 하시나요?" />
            <button onClick={onPrev}>이전</button>
            <button onClick={onNext}>다음</button>
          </div>
        )}
        {step === 5 && (
          <div>
            <h1>콩들에게 연락할 수 있는 링크를 알려주세요.</h1>
            <input type="text" placeholder="링크를 입력해주세요." />
            <button onSubmit={onSubmit}>완두콩 만들기</button>
          </div>
        )}
      </MediaQuery>
    </div>
  );
}
