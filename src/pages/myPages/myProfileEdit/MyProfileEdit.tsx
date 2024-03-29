import { useEffect, useState } from "react";
import { getUserProfileApi } from "../../../api/myPages/myPage/getUserMyInfoApi";
import MyPageHeader from "../components/myPageHeader";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useEditProfileReducer } from "../../../hooks/useEditProfileReducer";
import { colors } from "../../../styles/colors";
import { SingleButton } from "../../../components/buttons/singleButton";
import MyProfileEditPositionSelector from "./components/myProfileEditPositionSelector";
import MyProfileEditCareerRangeSelector from "./components/myProfileEditCareerRangeSelector";
import MyProfileEditTagSelector from "./components/myProfileEditTagSelector";
import _ from "lodash";
import setUpdateMyProfileApi from "../../../api/myPages/myPage/setUpdateMyProfileApi";
import InputValidationErrorMessage from "../../signUp/components/inputValidationErrorMessage";
import { isEmpty } from "../../../@types/utility/typeGuard";
import DialogueModal from "../../../components/modal/DialogueModal";

export default function MyProfileEdit() {
  const navigate = useNavigate();
  const [isDifferent, setIsDifferent] = useState(false);
  const [isModalOn, setIsModalOn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [myInfo, setMyInfo] = useState({
    nickname: "",
    roleMain: "dev",
    careerRange: "0_4",
    tagList: [],
  });

  const { state, onChangeNickname, onChangeMyPosition, onChangeCareerRange, onChangeTagNameList } =
    useEditProfileReducer();

  const onSaveHandler = async () => {
    if (isEmpty(myInfo.nickname)) {
      return setErrorMessage("닉네임을 입력하세요.");
    }
    if (isDifferent) {
      await setUpdateMyProfileApi(state);
      window.location.reload();
    }
  };

  const onCloseModal = () => {
    setIsModalOn(!isModalOn);
    navigate("/myAccount");
  };

  const onNavigateBack = () => {
    if (isDifferent) {
      return setIsModalOn(!isModalOn);
    }
    navigate("/myAccount");
  };

  const onSaveProfileChangesHandler = async () => {
    if (isEmpty(myInfo.nickname)) {
      return setErrorMessage("닉네임을 입력하세요.");
    }
    if (isDifferent) {
      await setUpdateMyProfileApi(state);
      navigate("/myAccount");
    }
  };

  useEffect(() => {
    (async function () {
      const response = await getUserProfileApi();
      const tagList = response.tagList.sort((a, b) => (a < b ? -1 : 1));
      setMyInfo({
        nickname: response.nickname,
        roleMain: response.roleMain,
        careerRange: response.careerRange,
        tagList: tagList,
      });
      onChangeNickname(response.nickname);
      onChangeMyPosition(response.roleMain);
      onChangeCareerRange(response.careerRange);
      response.tagList.forEach((tag) => onChangeTagNameList(tag));
    })();
  }, []);

  useEffect(() => {
    const isEqual = _.isEqual(state, myInfo);
    if (!isEqual) {
      return setIsDifferent(true);
    } else {
      return setIsDifferent(false);
    }
  }, [state]);

  return (
    <>
      {isModalOn && (
        <DialogueModal
          title="변경된 사항을 저장하시겠습니까?"
          content="페이지를 나가면 변경사항이 저장되지 않습니다."
          modalIcon="exclamation"
          showCloseButton={true}
          onClose={onCloseModal}
          singleButtonLabel="저장하기"
          onClickSingleButton={onSaveProfileChangesHandler}
        />
      )}
      <MyPageHeader title="프로필 수정" onClick={onNavigateBack} />
      <Container isError={errorMessage}>
        <div className="nickname-input">
          <input
            type="text"
            value={state.nickname}
            onChange={(e) => onChangeNickname(e.currentTarget.value)}
            maxLength={20}
          />
          <div className="text-wrapper">
            {errorMessage && <InputValidationErrorMessage text={errorMessage} />}
            <span>{state.nickname.length}/20</span>
          </div>
        </div>
        <MyProfileEditPositionSelector
          myPosition={state.roleMain}
          onChange={(e) => onChangeMyPosition(e.currentTarget.value)}
        />
        <MyProfileEditCareerRangeSelector
          myCareerRange={state.careerRange}
          onChange={(e) => onChangeCareerRange(e.currentTarget.value)}
        />
        <MyProfileEditTagSelector tags={state.tagList} onChange={onChangeTagNameList} />
      </Container>
      <SingleButton label="수정 완료" onClick={onSaveHandler} isActive={isDifferent} />
    </>
  );
}

const Container = styled.div<{ isError: string }>`
  padding: 72px 20px 140px;

  div.nickname-input {
    margin: 30px 0 20px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${colors.subBrand50};

    input {
      width: 100%;
      border: 0;
      border-bottom: 1px solid ${colors.grey900};
      background: none;
      box-sizing: border-box;
      font-size: 24px;
      font-weight: 700;
      line-height: 33px;
      color: ${colors.grey900};

      &:focus {
        outline: none;
        border-bottom: 1px solid ${colors.grey900};
      }
    }

    div.text-wrapper {
      display: flex;
      justify-content: ${(props) => (props.isError ? "space-between" : "flex-end")};
      margin-top: 6px;

      span {
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: -0.4px;
        color: ${colors.subBrand400};
        text-align: right;
      }
    }
  }
`;
