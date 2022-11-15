import React, { useEffect, useState } from "react";
import ContentLayout from "../../components/layout/contentLayout";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "./components/navigation";
import NickNameStep from "./signUpForm/nickNameStep";
import PositionPage from "./signUpForm/positionPage";
import TagPage from "./signUpForm/tagPage";
import { useSignUpReducer } from "./hooks/useSignUpReducer";
import qs from "qs";
import signUpApi from "../../api/signUpApi";

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState(1);
  const { state, onChangeUserSocialId, onChangeNickname, onChangeRoleMain, onChangeCareerRange, onChangeTagNameList } =
    useSignUpReducer();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const onPreviousHandler = () => setStep((step) => step - 1);
  const onNextHandler = () => setStep((step) => step + 1);
  const onClick = () => {
    navigate("/");
  };

  const onSubmit = async () => {
    try {
      const response = await signUpApi.createUser(state);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    onChangeUserSocialId(Number(query.userSocialId));
  }, [location]);

  return (
    <ContentLayout>
      <Navigation onClick={onClick} />
      <form onSubmit={(e) => e.preventDefault()}>
        {step === 1 && <NickNameStep nickname={state.nickname} onChange={onChangeNickname} onNext={onNextHandler} />}
        {step === 2 && (
          <PositionPage
            roleMain={state.roleMain}
            onChangeRoleMain={onChangeRoleMain}
            onChangeCareerRange={onChangeCareerRange}
            careerRange={state.careerRange}
            onNext={onNextHandler}
            onPrev={onPreviousHandler}
          />
        )}
        {step === 3 && (
          <TagPage
            tags={state.tagNameList}
            nickname={state.nickname}
            onChange={onChangeTagNameList}
            onNext={onSubmit}
            onPrev={onPreviousHandler}
          />
        )}
      </form>
    </ContentLayout>
  );
}
