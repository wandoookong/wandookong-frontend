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
        {value.length}/{maxLength}
      </LengthInfo>
    </>
  );
}

const MultiText = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  border: 2px solid #ddd;
  border-radius: 2px;
  padding: 20x;

  &:focus {
    outline: none;
    border: 2px solid #000;
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

export function TextArea({ onChange, ...rest }) {
  return <MultiText onChange={onChange} {...rest} />;
}
