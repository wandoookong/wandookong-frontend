import styled from "@emotion/styled";
import { colors } from "../../../../styles/colors";

interface Props {
  title: string;
  onClickYes(value?: any): void;
  onClickNo(value?: any): void;
}

export default function ConfirmModal({ title, onClickYes, onClickNo }: Props) {
  return (
    <Container onClick={onClickNo}>
      <ModalWrapper>
        <ContentWrapper>
          <h1>{title}</h1>
        </ContentWrapper>
        <BottomWrapper>
          <div onClick={onClickYes}>네</div>
          <div onClick={onClickNo}>아니오</div>
        </BottomWrapper>
      </ModalWrapper>
    </Container>
  );
}

const Container = styled.div`
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
  background: ${colors.modalDim};
  z-index: 900;
`;

const ModalWrapper = styled.div`
  position: relative;
  width: 293px;
  height: 150px;
  border-radius: 8px;
  background: ${colors.white};
`;

const ContentWrapper = styled.div`
  margin: 0;
  padding: 0;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 51px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.grey900};
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 44px;
  border-top: 1px solid #d9d9d9;

  div {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #8b8b8b;
    cursor: pointer;
  }

  div + div {
    border-left: 1px solid #d9d9d9;
    font-weight: 700;
    color: ${colors.grey900};
    cursor: pointer;
  }
`;
