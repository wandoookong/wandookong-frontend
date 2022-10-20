import styled from "@emotion/styled";

const MultiText = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  border: 2px solid #dbd6c5;
  font-family: Pretendard;
  font-size: 14px;
  border-radius: 8px;
  padding: 16px 12px;
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
`;

const LengthInfo = styled.p`
  margin: 0;
  float: right;
  font-family: Pretendard;
  font-size: 14px;
  color: #dbd6c5;
`;

const maxLength = 1000;

export function TextArea({ onChange, value, ...rest }) {
  return (
    <div>
      <MultiText onChange={onChange} value={value} {...rest} />
      <LengthInfo>
        {value.length}/{maxLength}
      </LengthInfo>
    </div>
  );
}
