import styled from "@emotion/styled";
import { useState } from "react";
import Chrun from "../../pages/requestForm/requestFormSteps/churn";

const Wrap = styled.div`
  width: auto;
  height: 28px;
  margin: 0 0 52px 0;
  padding-top: 24px;
  background: #fff;
`;

const Content = styled.div`
  margin-bottom: 20px;
  float: right;
`;

const ProgressBar = styled.progress`
  width: 100%;
  height: 12px;

  -webkit-appearance: none;

  ::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 20px;
  }
  ::-webkit-progress-value {
    background-color: #47b561;
    border-radius: 20px;
  }

  // animation: progress 1.5s ease-in-out;

  @keyframes progress {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

interface Props {
  step: number;
}

export function Navigation({ step }: Props) {
  const [modal, setModal] = useState(false);

  const onClick = () => {
    setModal(!modal);
  };
  const value = Math.round((100 / 6) * step);

  return (
    <>
      {modal && <Chrun setModal={setModal} />}
      <Wrap>
        <Content onClick={onClick}>뒤로</Content>
        <ProgressBar value={value} max="100" />
      </Wrap>
    </>
  );
}
