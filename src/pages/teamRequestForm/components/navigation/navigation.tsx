import styled from "@emotion/styled";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FloatingModal from "../../../../components/modal/FloatingModal";
import { useNavigate } from "react-router-dom";
import { colors } from "../../../../styles/colors";

interface Props {
  step: number;
}

export function Navigation({ step }: Props) {
  const navigate = useNavigate();
  const [isModalOn, setIsModalOn] = useState<boolean>(false);

  const onClick = () => {
    setIsModalOn(!isModalOn);
  };
  const onNext = () => {
    navigate("/");
  };

  const calculateProgressBarValue: number = Math.round((100 / 6) * step);

  return (
    <>
      {isModalOn && (
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
          onClose={() => setIsModalOn(false)}
          showClose={false}
          prevLabel="나가기"
          onPrev={onNext}
          nextLabel="이어서 작성하기"
          onNext={() => setIsModalOn(false)}
        />
      )}
      <Container>
        <progress value={calculateProgressBarValue} max="100" />
        <CloseIcon sx={{ fontSize: 28 }} onClick={onClick} />
      </Container>
    </>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 52px 20px 34px;
  box-sizing: border-box;
  background: ${colors.background};
  z-index: 5;

  progress {
    margin-right: 7px;
    width: 100%;
    height: 12px;
    -webkit-appearance: none;

    ::-webkit-progress-bar {
      background-color: ${colors.grey100};
      border-radius: 20px;
    }

    ::-webkit-progress-value {
      background-color: ${colors.brand900};
      border-radius: 20px;
      transition: all 0.2s ease-in-out;
    }
  }
`;
