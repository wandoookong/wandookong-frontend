import styled from "@emotion/styled";
import { ModalButton } from "../../../../components/form/button/modalButton";
import exclamationIcon from "../modal/assets/exclamationIcon.png";
import { useNavigate } from "react-router-dom";

export default function Chrun({ setModal }) {
  const navigate = useNavigate();

  const Dim = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 900;
  `;

  const Box = styled.div`
    background: #fff;
    position: fixed;
    left: 42px;
    right: 42px;
    padding: 24px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.2);
    text-align: center;
  `;

  const Icon = styled.div`
    width: 92px;
    height: 92px;
    margin: 0 0 17px 0;
  `;

  const Title = styled.p`
    margin: 0;
    padding: 0;
    font-family: Pretendard;
    font-size: 16px;
    color: #242c35;
    h3 {
      margin: 0 0 13px 0;
      padding: 0;
      font-size: 16px;
    }
    span {
      maring-top: 13px;
    }
  `;

  const onPrev = () => {
    setModal(false);
  };

  const onNext = () => {
    navigate("/");
  };

  return (
    <Dim onClick={onPrev}>
      <Box>
        <Icon>
          <img src={exclamationIcon} />
        </Icon>
        <Title>
          <h3>완두콩이 거의 다 완료됐어요!</h3>
          <span>지금 돌아가면 작성 사항이 모두 삭제됩니다. 작성한 내용을 삭제하시겠습니까? </span>
        </Title>
        <ModalButton prevLabel="이어서 작성하기" nextLabel="나가기" onPrev={onPrev} onNext={onNext} />
      </Box>
    </Dim>
  );
}
