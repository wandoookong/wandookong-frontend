import styled from "@emotion/styled";
import { roleData } from "../../requestForm/requestFormSteps/roleData";

interface Props {
  filters: RoleDetail[];
  setFilters(value: RoleDetail[]): void;
}

export default function Filter({ filters, setFilters }: Props) {
  return (
    <FilterWrapper>
      <h3>완두콩 찾기</h3>
      <ContentWrapper>
        <FilterContent>
          <LabelWrapper>
            <p>직군콩 |</p>
            <Label checked={filters.length === 0} onClick={() => setFilters([])}>
              전체
            </Label>
            {roleData.map((role) => (
              <Label key={role.id} checked={filters.includes(role.value)} onClick={() => setFilters([role.value])}>
                {role.label}
                <input type="radio" />
              </Label>
            ))}
          </LabelWrapper>
        </FilterContent>
        <FilterContent>
          <LabelWrapper>
            <p>카테고리 |</p>
            <Label checked={true}>전체</Label>
            <Label checked={false}>포트폴리오</Label>
            <Label checked={false}>사이드 프로젝트</Label>
          </LabelWrapper>
        </FilterContent>
      </ContentWrapper>
    </FilterWrapper>
  );
}

const FilterWrapper = styled.div`
  position: relative;
  margin: 32px 0 0 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0ebd8;
  h3 {
    margin: 0;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 700;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 13px;
`;

const FilterContent = styled.div`
  height: 100%;
  overflow: auto;
  white-space: nowrap;
  margin: 0 0 8px 0;
  ::-webkit-scrollbar {
    display: none;
  }
  p {
    display: inline-block;
    font-family: Pretendard;
    font-size: 12px;
    color: #242c35;
    margin: 0;
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  > p {
    flex: 0 0 59px;
  }
`;

const Label = styled.label<{ checked: boolean }>`
  margin-right: 8px;
  background: ${(props) => (props.checked ? "#ffeac5" : "#fff")};
  border: 1px solid #ffdd86;
  padding: 6px 8px;
  border-radius: 32px;
  font-family: Pretendard;
  color: #242c35;
  font-size: 12px;
  input {
    display: none;
  }
`;
