import styled from "@emotion/styled";
import { ModalButton } from "../../../components/form/button/modalButton";

export default function Chrun({ setModal }) {
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
    left: 20px;
    right: 20px;
    padding: 24px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.2);
  `;

  const Title = styled.p`
    margin: 0;
    padding: 0;
    font-size: 16px;
  `;

  const onClick = () => {
    setModal(false);
  };

  return (
    <Dim onClick={onClick}>
      <Box>
        <Title>
          <b>완두콩 작성이 거의 다 완료되었어요!</b> <br />
          <span>지금 돌아가면 작성 사항이 모두 삭제됩니다. 작성한 내용을 삭제하시겠습니까?</span>
        </Title>
        <ModalButton label="닫기" onClick={onClick} />
      </Box>
    </Dim>
  );
}
