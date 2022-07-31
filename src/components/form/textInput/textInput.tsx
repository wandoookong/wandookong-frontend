import styled from "@emotion/styled";
import { isEmpty } from "../../../@types/utility/typeGuard";

const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 2px;
  padding: 16px 12px;
  border: 2px solid #dbd6c5;
  border-radius: 8px;
  font-family: Pretendard;
  font-size: 14px;
  transition: 0.2s;
  background: none;

  &:focus {
    outline: none;
    border: 2px solid #000;
  }

  ::-webkit-input-placeholder {
    color: #c1b897;
  }
  ::-moz-placeholder {
    color: #c1b897;
  }
  :-ms-input-placeholder {
    color: #c1b897;
  }
  :-moz-placeholder {
    color: #c1b897;
  }

  ::placeholder {
    color: #c1b897;
  }
`;
const LengthInfo = styled.p`
  margin: 0;
  float: right;
  font-size: 14px;
  color: #dbd6c5;
`;

export function TextInput({ value, ...rest }) {
  const maxLength = rest.maxLength;
  return (
    <>
      <Input type="text" maxLength={maxLength} value={value} {...rest} />
      {isEmpty(maxLength) && (
        <LengthInfo>
          {value.length}/{maxLength}
        </LengthInfo>
      )}
    </>
  );
}
