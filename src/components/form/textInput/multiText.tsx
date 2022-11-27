import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

interface Props {
  value: string;
  maxLength: number;
  placeholder: string;
  onChange(value?: any): void;
}

export function MultiTextInput({ onChange, value, maxLength, placeholder }: Props) {
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
    height: 219px;
    border: 2px solid ${colors.subBrand100};
    font-family: "Pretendard", "Noto Sans CJK KR", sans-serif;
    font-size: 14px;
    border-radius: 8px;
    margin-bottom: 6px;
    padding: 16px 12px;
    background: none;
    resize: none;

    &:focus {
      outline: none;
      border: 2px solid ${colors.black};
    }

    ::-webkit-input-placeholder {
      color: ${colors.subBrand400};
    }
    ::-moz-placeholder {
      color: ${colors.subBrand400};
    }
    :-ms-input-placeholder {
      color: ${colors.subBrand400};
    }
    :-moz-placeholder {
      color: ${colors.subBrand400};
    }
  }

  p {
    margin: 0;
    float: right;
    font-size: 14px;
    color: ${colors.subBrand100};
  }
`;
