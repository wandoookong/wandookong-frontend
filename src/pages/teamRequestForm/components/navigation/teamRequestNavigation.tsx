import styled from "@emotion/styled";
import { useState } from "react";
import DialogueModal from "../../../../components/modal/DialogueModal";
import { useNavigate } from "react-router-dom";
import { colors } from "../../../../styles/colors";
import CloseIcon from "../../../../assets/icons/close-grey900.svg";

interface Props {
  step: number;
}

export function TeamRequestNavigation({ step }: Props) {
  const navigate = useNavigate();
  const [isModalOn, setIsModalOn] = useState<boolean>(false);

  const onCloseModal = () => {
    setIsModalOn(!isModalOn);
  };
  const onNext = () => {
    navigate("/");
  };

  const calculateProgressBarValue: number = Math.round((100 / 6) * step);

  return (
    <>
      {isModalOn && (
        <DialogueModal
          title="완두콩이 거의 다 완료됐어요!"
          content={`지금 돌아가면 작성 사항이 \n 모두 삭제됩니다. 작성한 내용을 \n 삭제하시겠습니까?`}
          modalIcon="exclamation"
          onClose={() => setIsModalOn(false)}
          showCloseButton={false}
          previousButtonLabel="나가기"
          onPrevious={onNext}
          nextButtonLabel="이어서 작성하기"
          onNext={() => setIsModalOn(false)}
        />
      )}
      <Container>
        <progress value={calculateProgressBarValue} max="100" />
        <button onClick={onCloseModal} />
      </Container>
    </>
  );
}

const Container = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 360px;
  max-width: 480px;
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

  button {
    width: 28px;
    height: 28px;
    background: transparent url(${CloseIcon}) center / 100% no-repeat;
    border: none;
    cursor: pointer;
  }
`;
