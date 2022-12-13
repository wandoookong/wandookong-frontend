import styled from "@emotion/styled";
import { ModalButton } from "../buttons/modalButton";
import { colors } from "../../styles/colors";
import CloseIcon from "../../assets/icons/close-grey900.svg";
import CheckImage from "../../assets/icons/check-modal.png";
import ExclamationImage from "../../assets/icons/exclamanation-modal.png";

interface Props {
  title: string;
  modalIcon: string;
  content: string;

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
  modalIcon,
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
    <Container onClick={onClose}>
      <ModalWrapper
        icon={modalIcon}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {showClose && (
          <CloseButtonWrapper>
            <button onClick={onClose} />
          </CloseButtonWrapper>
        )}
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 900;
`;

const ModalWrapper = styled.div<{ icon: string }>`
  position: fixed;
  width: 276px;
  height: auto;
  min-height: 304px;
  padding-top: 141px;
  box-sizing: border-box;
  background: ${colors.white} url(${(props) => (props.icon === "check" ? CheckImage : ExclamationImage)}) top 32px left
    92px / 92px no-repeat;
  border-radius: 12px;
  box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: 16px;

  button {
    width: 28px;
    height: 28px;
    border: none;
    background: transparent url(${CloseIcon}) center / 100% no-repeat;
    cursor: pointer;
  }
`;

const ContentWrapper = styled.div`
  margin: 0;
  padding: 0 20px;

  color: ${colors.grey900};

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
  background: ${colors.brand900};
  font-size: 14px;
  font-weight: 700;
  color: ${colors.white};
  cursor: pointer;
`;
