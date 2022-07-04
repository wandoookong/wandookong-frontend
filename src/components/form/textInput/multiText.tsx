import styled from "@emotion/styled";

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
