import styled from "@emotion/styled";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FloatingModal from "../modal/FloatingModal";
import { useNavigate } from "react-router-dom";

interface Props {
  step: number;
}

export function Navigation({ step }: Props) {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const onClick = () => {
    setModal(!modal);
  };
  const onNext = () => {
    navigate("/");
  };

  const value = Math.round((100 / 6) * step);

  return (
    <>
      {modal && (
        <FloatingModal
          title="완두콩이 거의 다 완료됐어요!"
          content={
            <span>
              지금 돌아가면 작성 사항이
              <br />
              모두 삭제됩니다. 작성한 내용을
              <br />
              삭제하시겠습니까?
            </span>
          }
          onClose={() => setModal(false)}
          showClose={false}
          prevLabel={"나가기"}
          onPrev={onNext}
          nextLabel={"이어서 작성하기"}
          onNext={() => setModal(false)}
        />
      )}
      <Container>
        <progress value={value} max="100" />
        <CloseIcon sx={{ fontSize: 28, ml: 1 }} onClick={onClick} />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: auto;
  height: 28px;
  margin: 44px 0 26px 0;
  padding: 0;
  align-items: center;

  progress {
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
  }
`;
