import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import BackIcon from "../../../assets/icons/back.png";

interface Props {
  title: string;
  onClick(): void;
}

export default function MyPageHeader({ title, onClick }: Props) {
  return (
    <Container>
      <button onClick={onClick} />
      <h1>{title}</h1>
    </Container>
  );
}

const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 44px 16px 13px;
  box-sizing: border-box;
  background: ${colors.background};
  z-index: 4;

  button {
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    background: transparent url(${BackIcon}) center / 100% no-repeat;
    cursor: pointer;
  }

  h1 {
    margin-left: 8px;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: ${colors.grey900};
  }
`;
