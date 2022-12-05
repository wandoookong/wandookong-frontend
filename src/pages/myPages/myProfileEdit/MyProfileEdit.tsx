import { useEffect, useState } from "react";
import { getUserMyInfoApi } from "../../../api/myPages/myPage/getUserMyInfoApi";
import MyPageHeader from "../components/myPageHeader";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useEditProfileReducer } from "./hooks/useEditProfileReducer";
import { colors } from "../../../styles/colors";
import { SingleButton } from "../../../components/buttons/singleButton";
import MyProfileEditPositionSelector from "./components/myProfileEditPositionSelector";
import MyProfileEditCareerRangeSelector from "./components/myProfileEditCareerRangeSelector";
import MyProfileEditTagSelector from "./components/myProfileEditTagSelector";
import _ from "lodash";
import setUpdateMyProfileApi from "../../../api/myPages/myPage/setUpdateMyProfileApi";

export default function MyProfileEdit() {
  const navigate = useNavigate();
  const [isDifferent, setIsDifferent] = useState(false);
  const [myInfo, setMyInfo] = useState({
    nickname: "",
    roleMain: "dev",
    careerRange: "0_4",
    tagList: [],
  });

  const { state, onChangeNickname, onChangeMyPosition, onChangeCareerRange, onChangeTagNameList } =
    useEditProfileReducer();

  const onClickSave = async () => {
    try {
      if (isDifferent) {
        const response = await setUpdateMyProfileApi(state);
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    (async function () {
      const response = await getUserMyInfoApi();
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
      <MyPageHeader title="프로필 수정" onClick={() => navigate("/myAccount")} />
      <Container>
        <div className="nickname-input">
          <input
            type="text"
            value={state.nickname}
            onChange={(e) => onChangeNickname(e.currentTarget.value)}
            maxLength={20}
          />
          <span>{state.nickname.length}/20</span>
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
        <SingleButton label="수정 완료" onClick={onClickSave} isActive={isDifferent} />
      </Container>
    </>
  );
}

const Container = styled.div`
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

    span {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: -0.4px;
      color: ${colors.subBrand400};
      text-align: right;
    }
  }
`;