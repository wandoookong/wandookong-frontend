import React, { useEffect, useState } from "react";
import { Navigation } from "../../components/Form/navigation";
import CategoryStep from "./requestFormSteps/categoryStep";
import TitleStep from "./requestFormSteps/titleStep";
import MyRoleStep from "./requestFormSteps/myRoleStep";
import RolesStep from "./requestFormSteps/rolesStep";
import DescriptionStep from "./requestFormSteps/descriptionStep";

export default function RequestForm() {
  const [step, setStep] = useState(1);
  const [formInfos, setFormInfos] = useState({
    teamCategory: "",
    title: "",
    myRole: "",
    members: {
      product: 0,
      ux_ui: 0,
      app: 0,
      web_front: 0,
      back_end: 0,
    },
    description: "",
    contact: "",
  });

  const stepController = { step, setStep };
  const props = { form: { formInfos, setFormInfos }, step: { step, setStep } };

  useEffect(() => {
    console.log(formInfos);
  }, [formInfos]);

  const onSubmit = () => {};

  return (
    <form onSubmit={onSubmit}>
      <Navigation step={step} formInfos={formInfos} />
      {step === 1 && <CategoryStep formInfos={formInfos} setForm={setFormInfos} stepController={stepController} />}
      {step === 2 && <TitleStep formInfos={formInfos} setForm={setFormInfos} stepController={stepController} />}
      {step === 3 && <MyRoleStep formInfos={formInfos} setForm={setFormInfos} stepController={stepController} />}
      {step === 4 && <RolesStep formInfos={formInfos} setForm={setFormInfos} stepController={stepController} />}
      {step === 5 && <DescriptionStep formInfos={formInfos} setForm={setFormInfos} stepController={stepController} />}
      {step === 6 && (
        <div>
          <h1>콩들에게 연락할 수 있는 링크를 알려주세요.</h1>
          <input type="text" placeholder="링크를 입력해주세요." />
          <button>완두콩 만들기</button>
        </div>
      )}
    </form>
  );
}
