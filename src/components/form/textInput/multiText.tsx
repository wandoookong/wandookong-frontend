import styled from "@emotion/styled";

const MultiText = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  border: 2px solid #dbd6c5;
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

export function TextArea({ onChange, ...rest }) {
  return <MultiText onChange={onChange} {...rest} />;
}
