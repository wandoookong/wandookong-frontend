import styled from "@emotion/styled";

const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  margin-bottom: 12px;
  padding: 8px;
  border: 2px solid #dbd6c5;
  border-radius: 8px;
  font-size: 16px;
  transition: 0.2s;
  background: none;

  &:focus {
    outline: none;
    border-bottom: 2px solid #000;
  }

  ::-webkit-input-placeholder {
    color: #ccc;
  }
  ::-moz-placeholder {
    color: #ccc;
  }
  :-ms-input-placeholder {
    color: #ccc;
  }
  :-moz-placeholder {
    color: #ccc;
  }
`;
const LengthInfo = styled.p`
  margin: 0;
  float: right;
  font-size: 14px;
  color: #999;
`;

const maxLength = 20;

export function TextInput({ value, ...rest }) {
  return (
    <>
      <Input type="text" maxLength={maxLength} value={value} {...rest} />
      <LengthInfo>
        {value.length}/{maxLength}
      </LengthInfo>
    </>
  );
}
