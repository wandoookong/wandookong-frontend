import { useEffect, useState } from "react";
import styled from "@emotion/styled";

export default function MyProfileEdit({ myInfo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [nickname, setNickname] = useState(myInfo.nickname);
  const [roleMain, setRoleMain] = useState(myInfo.roleMain);
  const [careerRange, setCareerRange] = useState(myInfo.careerRange);
  const [tagNameList, setTagNameList] = useState(myInfo.tagList);

  myInfo.tagList.sort((a, b) => (a < b ? -1 : 1));

  useEffect(() => {
    if (isEdit) return;
    if (
      myInfo.nickname !== nickname ||
      myInfo.roleMain !== roleMain ||
      myInfo.careerRange !== careerRange ||
      JSON.stringify(myInfo.tagList) !== JSON.stringify(tagNameList.sort((a, b) => (a < b ? -1 : 1)))
    ) {
      setIsEdit(true);
    }
  }, [nickname, roleMain, careerRange, tagNameList]);

  return <Container></Container>;
}

const Container = styled.form``;
