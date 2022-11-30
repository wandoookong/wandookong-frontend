import { useEffect, useState } from "react";
import { getUserMyInfoApi } from "../../../api/myPages/myPage/getUserMyInfoApi";
import { UserMyInfo } from "../../../@types/dto/userMyInfo";
import MyPageHeader from "../components/myPageHeader";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useEditProfileReducer } from "./hooks/useEditProfileReducer";
import { colors } from "../../../styles/colors";
import { SingleButton } from "../../../components/buttons/singleButton";
import MyProfileEditPositionSelector from "./components/myProfileEditPositionSelector";
import MyProfileEditCareerRangeSelector from "./components/myProfileEditCareerRangeSelector";
import MyProfileEditTagSelector from "./components/myProfileEditTagSelector";

export default function MyProfilePage() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [myInfo, setMyInfo] = useState<UserMyInfo>({
    careerRange: "0_4",
    email: "",
    nickname: "",
    roleMain: "dev",
    tagList: [],
  });

  const { state, onChangeNickname, onChangeMyPosition, onChangeCareerRange, onChangeTagNameList } =
    useEditProfileReducer();

  const onClickSave = () => {};

  useEffect(() => {
    (async function () {
      const response = await getUserMyInfoApi();
      setMyInfo(response);
      onChangeNickname(response.nickname);
      onChangeMyPosition(response.roleMain);
      onChangeCareerRange(response.careerRange);
      response.tagList.map((tag) => onChangeTagNameList(tag));
    })();
  }, []);

  const result = myInfo.tagList.every((tag) => state.tagNameList.includes(tag));

  useEffect(() => {
    if (
      myInfo.nickname !== state.nickname ||
      myInfo.careerRange !== state.careerRange ||
      myInfo.roleMain !== state.myPosition
    ) {
      return setIsActive(true);
    }
  }, [state]);

  return (
    <>
      <MyPageHeader title="프로필 수정" onClick={() => navigate(-1)} />
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
          myPosition={state.myPosition}
          onChange={(e) => onChangeMyPosition(e.currentTarget.value)}
        />
        <MyProfileEditCareerRangeSelector
          myCareerRange={state.careerRange}
          onChange={(e) => onChangeCareerRange(e.currentTarget.value)}
        />
        <MyProfileEditTagSelector tags={state.tagNameList} onChange={onChangeTagNameList} />
        <SingleButton label="수정 완료" onClick={onClickSave} isActive={isActive} />
      </Container>
    </>
  );
}

const Container = styled.form`
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
