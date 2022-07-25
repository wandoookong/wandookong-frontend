import styled from "@emotion/styled";

const FilterWrapper = styled.div`
  position: relative;
  margin: 32px 20px 0 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0ebd8;
  h3 {
    font-size: 20px;
    font-weight: 700;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 13px;
`;

const FilterContent = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 8px 0;
  p {
    font-size: 12px;
    margin: 0 20px 0 0;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  align-items: center;
  button {
    font-size: 12px;
    height: 29px;
    border-radius: 32px;
    padding: 6px 8px;
    border: 1px solid #ffdd86;
    background: #fff;
    margin-right: 8px;
  }
`;

export default function Filter() {
  return (
    <FilterWrapper>
      <h3>완두콩 찾기</h3>
      <ContentWrapper>
        <FilterContent>
          <p>직군 콩 |</p>
          <FilterButtons>
            <button>전체</button>
            <button>전체</button>
            <button>전체</button>
            <button>전체</button>
            <button>전체</button>
          </FilterButtons>
        </FilterContent>
        <FilterContent>
          <p>카테고리 |</p>
          <FilterButtons>
            <button>전체</button>
            <button>전체</button>
          </FilterButtons>
        </FilterContent>
      </ContentWrapper>
    </FilterWrapper>
  );
}
