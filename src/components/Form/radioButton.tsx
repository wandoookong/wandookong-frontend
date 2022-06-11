import { css } from "@emotion/react";
import styled from "@emotion/styled";

export function RadioButton({ label, description, checked, ...rest }) {
  const Wrap = styled.div`
    width: auto;
    height: auto;
    margin-bottom: 8px;
    padding: 12px 12px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;

    ${() => {
      if (!checked) {
        return css`
          background: #fff;
          border: 2px solid #eee;
        `;
      }
      return css`
        background: #fff;
        border: 2px solid #41df09;
      `;
    }}
  `;

  const Label = styled.label`
    display: block;
    font-weight: 600;

    ${() => {
      if (!checked) {
        return css`
          color: #999;
        `;
      }
      return css`
        color: #3ed209;
      `;
    }}
  `;

  const Input = styled.input`
    display: none;
  `;

  const SubText = styled.p`
    margin: 8px 0 0 0;
    font-size: 12px;
    font-weight: 400;

    ${() => {
      if (!checked) {
        return css`
          color: #999;
        `;
      }
      return css`
        color: #3ed209;
      `;
    }}
  `;

  return (
    <Wrap>
      <Label>
        <Input type="radio" name="category" checked={checked} {...rest} />
        {label}
        <SubText>{description}</SubText>
      </Label>
    </Wrap>
  );
}

export function CircleRadioButton({ label, value, checked, ...rest }) {
  const Label = styled.label`
    display: inline-block;
    margin-right: 24px;
    white-space: pre-line;

    ${() => {
      if (!checked) {
        return css`
          color: #999;
        `;
      }
      return css`
        font-weight: 500;
        color: #3ed209;
      `;
    }}
  `;

  const Image = styled.div`
    width: 52px;
    height: 52px;
    margin: 0 0 12px 0;
    border: 0;
    border-radius: 50px;

    ${() => {
      if (!checked) {
        return css`
          background: #eee;
        `;
      }
      return css`
        background: #3ed209;
      `;
    }}
  `;

  const Input = styled.input`
    display: none;
  `;

  return (
    <Label>
      <Image />
      <Input type="radio" name="myRole" value={value} checked={checked} {...rest} />
      {label}
    </Label>
  );
}

export function CircleCheckbox({ label, value, checked, disabled, ...rest }) {
  const Label = styled.label`
    display: inline-block;
    margin-right: 24px;
    white-space: pre-line;
    ${() => {
      if (!checked) {
        return css`
          color: #999;
        `;
      }
      return css`
        font-weight: 500;
        color: #3ed209;
      `;
    }}
    ${() => {
      if (disabled) {
        return css`
          color: #ddd;
        `;
      }
    }}
  `;

  const Image = styled.div`
    width: 52px;
    height: 52px;
    margin: 0 0 12px 0;
    border: 0;
    border-radius: 50px;
    ${() => {
      if (disabled) {
        return css`
          background: rgba(0, 0, 0, 0.05);
        `;
      }
    }}
    ${() => {
      if (!checked) {
        return css`
          background: #eee;
        `;
      }
      return css`
        background: #3ed209;
      `;
    }}
  `;

  const Input = styled.input`
    display: none;
  `;

  return (
    <Label>
      <Image />
      <Input type="checkbox" name="roles" value={value} checked={checked} disabled={disabled} {...rest} />
      {label}
    </Label>
  );
}
