import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import { ModalButton } from "../buttons/modalButton";

interface Props {
  title: string;
  content: any;

  /**
   * 우상단 X 버튼, 모달 바깥을 누른 경우
   */
  onClose: () => void;

  /**
   * 우상단 X 버튼
   */
  showClose: boolean;

  /**
   * button 2개
   */
  prevLabel?: string;
  onPrev?: React.MouseEventHandler<HTMLButtonElement>;
  nextLabel?: string;
  onNext?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * button 1개
   */
  buttonLabel?: string;
  onClickButton?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function FloatingModal({
  title,
  content,
  onClose,
  showClose,
  prevLabel,
  onPrev,
  nextLabel,
  onNext,
  buttonLabel,
  onClickButton,
}: Props) {
  return (
    <Background onClick={onClose}>
      <ModalWrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {showClose && (
          <CloseButtonWrapper>
            <CloseIcon sx={{ fontSize: 28, ml: 1 }} onClick={onClose} />
          </CloseButtonWrapper>
        )}
        <IconWrapper>
          <Icon>
            <i>!</i>
          </Icon>
        </IconWrapper>
        <ContentWrapper>
          <h3>{title}</h3>
          <span>{content}</span>
        </ContentWrapper>
        {prevLabel && onPrev && nextLabel && nextLabel && (
          <ModalButton prevLabel={prevLabel} nextLabel={nextLabel} onPrev={onPrev} onNext={onNext} />
        )}
        {buttonLabel && onClickButton && (
          <OneButtonWrapper>
            <OneButton onClick={onClickButton}>{buttonLabel}</OneButton>
          </OneButtonWrapper>
        )}
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
  width: 276px;
  height: auto;
  min-height: 304px;
  border-radius: 12px;
  box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 92px;
  background: #ebf8f1;
  border-radius: 50%;
  margin: 32px 0 17px 0;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border: 2px solid #05a660;
    border-radius: 50%;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    color: #05a660;
  }
`;

//FIXME p > div
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

const OneButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  margin-top: 18px;
  left: 20px;
  right: 20px;
  bottom: 21px;
`;

const OneButton = styled.button`
  flex: 1;
  width: 100%;
  height: 41px;
  border-radius: 8px;
  border: 0;
  background: #47b561;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
`;
