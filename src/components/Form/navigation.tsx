import styled from "@emotion/styled";
import { useState } from "react";
import Chrun from "../../pages/requestForm/requestFormSteps/churn";

export function Navigation() {
  const [modal, setModal] = useState(false);

  const onClick = () => {
    setModal(!modal);
  };

  const Wrap = styled.div`
    width: auto;
    height: 28px;
    margin-bottom: 52px;
    padding-top: 24px;
    background: #fff;
  `;

  const Content = styled.div`
    margin-bottom: 12px;
  `;

  const ProgressBar = styled.progress`
    width: 100%;
    height: 20px;
    accent-color: #41df09;
  `;
  return (
    <>
      {modal && <Chrun setModal={setModal} />}
      <Wrap>
        <Content onClick={onClick}>&lt;</Content>
        <ProgressBar value="20" max="100"></ProgressBar>
      </Wrap>
    </>
  );
}
