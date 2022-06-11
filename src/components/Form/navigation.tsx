import styled from "@emotion/styled";
import { useState } from "react";
import Chrun from "../../pages/requestForm/requestFormSteps/churn";

export function Navigation({ step, formInfos }) {
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

  const value = (step / Object.keys(formInfos).length) * 100;
  // FIXME progress bar value만 애니메이션
  const ProgressBar = styled.progress`
    width: 100%;
    height: 12px;
    -webkit-appearance: none;
    ::-webkit-progress-bar {
      background-color: #eee;
      border-radius: 20px;
    }
    ::-webkit-progress-value {
      background-color: #41df09;
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

  return (
    <>
      {modal && <Chrun setModal={setModal} />}
      <Wrap>
        <Content onClick={onClick}>&lt;</Content>
        <ProgressBar value={value} max="100" />
      </Wrap>
    </>
  );
}
