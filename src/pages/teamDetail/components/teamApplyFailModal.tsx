import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import CloseIcon from "../../../assets/icons/close-white.svg";

interface Props {
  onClick(): void;
  title: string;
  content: string;
}

export default function TeamApplyFailModal({ title, content, onClick }: Props) {
  return (
    <Container>
      <header>
        <button onClick={onClick} />
      </header>
      <section>
        <h1>{title}</h1>
        <p>{content}</p>
      </section>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(1, 1, 1, 0.8);
  color: ${colors.white};
  z-index: 100;

  header {
    position: fixed;
    top: 0;
    width: 100%;
    min-width: 360px;
    max-width: 480px;
    height: 80px;
    padding: 42px 18px 0;
    background: transparent;
    box-sizing: border-box;

    button {
      float: right;
      width: 28px;
      height: 28px;
      padding: 0;
      background: transparent url(${CloseIcon}) center / 24px no-repeat;
      border: none;
      cursor: pointer;
    }
  }

  section {
    width: 100%;
    text-align: center;
    padding: 0 20px;
    box-sizing: border-box;

    h1 {
      margin-bottom: 8px;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
    }

    p {
      margin-top: 4px;
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      white-space: pre-wrap;
    }
  }
`;
