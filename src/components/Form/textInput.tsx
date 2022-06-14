import styled from "@emotion/styled";

const Input = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    margin-bottom: 12px;
    padding: 8px;
    border: 0;
    border-bottom: 2px solid #ddd;
    font-size: 16px;
    transition: 0.2s;
    
    &:focus {
    outline: none;
    border-bottom: 2px solid #000;
  `;

export function TextInput({ value, ...rest }) {
  const LengthInfo = styled.p`
    margin: 0;
    float: right;
    font-size: 14px;
    color: #999;
  `;

  const maxLength = 20;

  return (
    <>
      <Input type="text" maxLength={maxLength} value={value} {...rest} />
      <LengthInfo>
        {value.length}자/{maxLength}자
      </LengthInfo>
    </>
  );
}
