import { useEffect, useState } from "react";
import { UserMeReturnType } from "../../../api/types/userType";
import UserApi from "../../../api/userApi";
import Nickname from "./Nickname";
import Line from "./Line";
import Position from "./Position";
import Space from "./Space";
import CareerRange from "./CareerRange";
import Tag from "./Tag";
import { SingleButton } from "../../../components/buttons/singleButton";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyProfileEdit({ meInfo, setMeInfo }: { meInfo: UserMeReturnType; setMeInfo: any }) {
  const [isEdit, setIsEdit] = useState(false);
  const [nickname, setNickname] = useState(meInfo.nickname);
  const [roleMain, setRoleMain] = useState(meInfo.roleMain);
  const [careerRange, setCareerRange] = useState(meInfo.careerRange);
  const [tagNameList, setTagNameList] = useState(meInfo.tagList);

  meInfo.tagList.sort((a, b) => (a < b ? -1 : 1));

  useEffect(() => {
    if (isEdit) return;

    if (
      meInfo.nickname !== nickname ||
      meInfo.roleMain !== roleMain ||
      meInfo.careerRange !== careerRange ||
      JSON.stringify(meInfo.tagList) !== JSON.stringify(tagNameList.sort((a, b) => (a < b ? -1 : 1)))
    ) {
      setIsEdit(true);
    }
  }, [nickname, roleMain, careerRange, tagNameList]);

  const onClickModify = (e) => {
    e.preventDefault();

    UserApi.updateUserMe({ nickname, roleMain, careerRange, tagNameList })
      .then(() => UserApi.getUserMe())
      .then((res) => {
        setMeInfo(res);
        setIsEdit(false);
      });

    toast.success("저장되었습니다~!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <div>
        <Nickname nickname={meInfo.nickname} setNickname={setNickname} />
        <Line />
        <Position roleMain={meInfo.roleMain} setRoleMain={setRoleMain} />
        <Space />
        <CareerRange careerRange={meInfo.careerRange} setCareerRange={setCareerRange} />
        <Space />
        <Tag tagList={meInfo.tagList} setTagNameList={setTagNameList} />
        <SingleButton label={"수정 완료"} onClick={onClickModify} isActive={isEdit} />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
