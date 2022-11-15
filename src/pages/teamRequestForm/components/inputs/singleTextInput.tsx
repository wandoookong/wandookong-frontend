import styled from "@emotion/styled";
import { isEmpty } from "../../../../@types/utility/typeGuard";
import { colors } from "../../../../components/styles/colors";

interface Props {
  value: string;
  placeholder: string;
  maxLength?: number;
  onChange(value?: any): void;
}

export function SingleTextInput({ value, maxLength, placeholder, onChange }: Props) {
  return (
    <Container>
      <input type="text" maxLength={maxLength} value={value} onChange={onChange} placeholder={placeholder} />
      {!isEmpty(maxLength) && (
        <p>
          {value.length}/{maxLength}
        </p>
      )}
    </Container>
  );
}

const Container = styled.div`
  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 2px;
    padding: 16px 12px;
    border: 2px solid ${colors.subBrand100};
    border-radius: 8px;
    font-size: 14px;
    transition: 0.2s;
    background: none;

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

    ::placeholder {
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
