import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import CloseIcon from "../../assets/icons/close-grey900.svg";
import { useState } from "react";

export default function WalkThrough({ onClick }) {
  const [step, setStep] = useState(1);

  return (
    <Container>
      <button className="close-button" onClick={onClick} />
      <ul>
        <li>
          <button className="dot" />
        </li>
        <li>
          <button className="dot" />
        </li>
        <li>
          <button className="dot" />
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.background};
  z-index: 998;

  button.close-button {
    position: fixed;
    top: 57px;
    right: 20px;
    width: 24px;
    height: 24px;
    background: transparent url(${CloseIcon}) center / 100% no-repeat;
    border: none;
    cursor: pointer;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 16px;
    position: fixed;
    bottom: 80px;
    width: 100%;

    li {
      button {
        width: 8px;
        height: 8px;
        padding: 0;
        border-radius: 23px;
        background: ${colors.grey100};
        border: none;
        cursor: pointer;
      }
    }
  }
`;
