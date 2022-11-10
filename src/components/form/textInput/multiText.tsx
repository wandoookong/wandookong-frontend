import styled from "@emotion/styled";

interface Props {
  value: string;
  maxLength: number;
  placeholder: string;
  onChange(value?: any): void;
}

export function TextArea({ onChange, value, maxLength, placeholder }: Props) {
  return (
    <Container>
      <textarea onChange={onChange} value={value} placeholder={placeholder} />
      <p>
        {value.length}/{maxLength}
      </p>
    </Container>
  );
}

const Container = styled.div`
  textarea {
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    border: 2px solid #dbd6c5;
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
  }

  p {
    margin: 0;
    float: right;
    font-size: 14px;
    color: #dbd6c5;
  }
`;
