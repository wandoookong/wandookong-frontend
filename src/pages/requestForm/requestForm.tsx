import React, { useEffect, useState } from "react";
import { Navigation } from "../../components/Form/navigation";
import CategoryStep from "./requestFormSteps/categoryStep";
import TitleStep from "./requestFormSteps/titleStep";
import MyRoleStep from "./requestFormSteps/myRoleStep";
import RolesStep from "./requestFormSteps/rolesStep";

export default function RequestForm() {
  const [step, setStep] = useState(1);
  const stepController = { step, setStep };
  const [formInfos, setFormInfos] = useState({
    category: "",
    title: "",
    myRole: "",
    roles: [],
    memo: "",
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
      {/*<MediaQuery maxWidth={360}>*/}
      <Navigation step={step} formInfos={formInfos} />
      {step === 1 && <CategoryStep formInfos={formInfos} setForm={setFormInfos} stepController={stepController} />}
      {step === 2 && <TitleStep formInfos={formInfos} setForm={setFormInfos} stepController={stepController} />}
      {step === 3 && <MyRoleStep formInfos={formInfos} setForm={setFormInfos} stepController={stepController} />}
      {step === 4 && <RolesStep formInfos={formInfos} setForm={setFormInfos} stepController={stepController} />}
      {step === 5 && (
        <div>
          <h1>완두콩을 잘 설명할 수 있는 제목을 알려주세요.</h1>
          <textarea placeholder="어떤 콩들을 필요로 하시나요?" />
          <button onClick={onPrev}>이전</button>
          <button onClick={onNext}>다음</button>
        </div>
      )}
      {step === 6 && (
        <div>
          <h1>콩들에게 연락할 수 있는 링크를 알려주세요.</h1>
          <input type="text" placeholder="링크를 입력해주세요." />
          <button onSubmit={onSubmit}>완두콩 만들기</button>
        </div>
      )}
      {/*</MediaQuery>*/}
    </div>
  );
}
