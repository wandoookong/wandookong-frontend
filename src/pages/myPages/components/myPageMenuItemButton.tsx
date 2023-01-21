import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

interface Props {
  label: string;
  onClick(value?: any): void;
}

export function MyPageMenuItemButton({ label, onClick }: Props) {
  return (
    <MenuItemList>
      <button onClick={onClick}>{label}</button>
    </MenuItemList>
  );
}

const MenuItemList = styled.li`
    margin-bottom: 31px;

    button {
      display: block;
      width: 100%;
      padding: 0;
      border: none;
      background: transparent;
      text-align: left;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: ${colors.grey900};
      cursor: pointer;
    
`;
