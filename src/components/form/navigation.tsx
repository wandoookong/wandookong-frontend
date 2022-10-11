import styled from "@emotion/styled";
import { useState } from "react";
import Chrun from "../../pages/requestForm/requestFormSteps/modal/churn";
import CloseIcon from "@mui/icons-material/Close";

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
        <ProgressBar value={value} max="100" />
        <CloseIcon sx={{ fontSize: 28, ml: 1 }} onClick={onClick} />
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  width: auto;
  height: 28px;
  margin: 44px 0 26px 0;
  padding: 0;
  align-items: center;
`;

const ProgressBar = styled.progress`
  width: 100%;
  height: 12px;

  -webkit-appearance: none;

  ::-webkit-progress-bar {
    background-color: #d9d9d9;
    border-radius: 20px;
  }
  ::-webkit-progress-value {
    background-color: #47b561;
    border-radius: 20px;
  }

  @keyframes progress {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;
