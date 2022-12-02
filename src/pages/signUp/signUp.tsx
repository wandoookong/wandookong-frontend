import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CommonModalHeader from "../../components/header/commonModalHeader";
import SetPositionStep from "./components/steps/setPositionStep";
import SetTagsStep from "./components/steps/setTagsStep";
import { useSignUpReducer } from "./hooks/useSignUpReducer";
import qs from "qs";
import SetNickNameStep from "./components/steps/setNickNameStep";
import styled from "@emotion/styled";
import { signUpApi } from "../../api/signUp/signUpApi";

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState<number>(1);
  const { state, onChangeUserSocialId, onChangeNickname, onChangeRoleMain, onChangeCareerRange, onChangeTagNameList } =
    useSignUpReducer();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const onPreviousHandler = () => setStep((step) => step - 1);
  const onNextHandler = () => setStep((step) => step + 1);
  const onClickChurn = () => {
    navigate("/");
  };

  const onSubmit = async () => {
    try {
      const response = await signUpApi(state);
      navigate("/");
    } catch (e) {
      throw new Error();
    }
  };

  useEffect(() => {
    onChangeUserSocialId(Number(query.userSocialId));
  }, [location]);

  return (
    <Container>
      <CommonModalHeader onClick={onClickChurn} />
      <form onSubmit={(e) => e.preventDefault()}>
        {step === 1 && <SetNickNameStep nickname={state.nickname} onChange={onChangeNickname} onNext={onNextHandler} />}
        {step === 2 && (
          <SetPositionStep
            roleMain={state.roleMain}
            onChangeRoleMain={onChangeRoleMain}
            onChangeCareerRange={onChangeCareerRange}
            careerRange={state.careerRange}
            onPrev={onPreviousHandler}
            onNext={onNextHandler}
          />
        )}
        {step === 3 && (
          <SetTagsStep
            tags={state.tagNameList}
            nickname={state.nickname}
            onChange={onChangeTagNameList}
            onPrev={onPreviousHandler}
            onNext={onSubmit}
          />
        )}
      </form>
    </Container>
  );
}

const Container = styled.div`
  form {
    margin-top: 108px;
    padding-bottom: 140px;
  }
`;
