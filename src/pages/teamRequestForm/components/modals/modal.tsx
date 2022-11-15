import styled from "@emotion/styled";
import { ModalButton } from "../../../../components/buttons/modalButton";
import exclamationIcon from ".//assets/exclamationIcon.png";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  content: string;
  setModal(value: boolean): void;
}

export default function Modal({ title, content, setModal }: Props) {
  const navigate = useNavigate();

  const onPrev = () => {
    setModal(false);
  };
  const onNext = () => {
    navigate("/");
  };

  return (
    <Background onClick={onPrev}>
      <ModalWrapper>
        <Icon>
          <img src={exclamationIcon} />
        </Icon>
        <ContentWrapper>
          <h3>{title}</h3>
          <span>{content}</span>
        </ContentWrapper>
        <ModalButton prevLabel="이어서 작성하기" nextLabel="나가기" onPrev={onPrev} onNext={onNext} />
      </ModalWrapper>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const ModalWrapper = styled.div`
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
  display: flex;
  justify-content: center;
  width: 92px;
  height: 92px;
  margin: 0 0 17px 0;
`;

const ContentWrapper = styled.p`
  margin: 0;
  padding: 0;

  color: #242c35;

  h3 {
    margin: 0 0 13px 0;
    padding: 0;
    font-size: 16px;
    font-weight: 700;
  }

  span {
    margin-top: 13px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    word-break: keep-all;
    white-space: pre-wrap;
  }
`;
