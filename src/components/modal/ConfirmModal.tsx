import styled from "@emotion/styled";

export default function ConfirmModal({ title, onClickYes, onClickNo }) {
  return (
    <Background onClick={onClickNo}>
      <ModalWrapper>
        <ContentWrapper>
          <h3>{title}</h3>
        </ContentWrapper>
        <BottomWrapper>
          <div onClick={onClickYes}>네</div>
          <div onClick={onClickNo}>아니오</div>
        </BottomWrapper>
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
  position: relative;
  width: 293px;
  height: 150px;
  border-radius: 8px;
`;

const ContentWrapper = styled.p`
  margin: 0;
  padding: 0;

  h3 {
    margin-top: 51px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #242c35;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const BottomWrapper = styled.div`
  position: absolute;
  bottom: 0;

  border-top: 1px solid #d9d9d9;
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;

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
    color: #242c35;

    cursor: pointer;
  }
`;
