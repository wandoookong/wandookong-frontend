import styled from "@emotion/styled";
import { roleData } from "../../teamRequestForm/utilities/roleData";
import { useLocation, useNavigate } from "react-router-dom";
import { colors } from "../../../styles/colors";
import qs from "qs";

export default function FindTeamFilter() {
  const navigate = useNavigate();
  const location = useLocation();

  const getQuery = qs.parse(location.search, { ignoreQueryPrefix: true });

  const onChangeRoleDetailAllFilter = () => {
    if (getQuery.teamCategory !== undefined) {
      const parsedQuery = { ...getQuery };
      delete parsedQuery.roleDetail;
      return navigate(qs.stringify(parsedQuery, { addQueryPrefix: true }));
    }
    return navigate("/");
  };

  const onChangeRoleDetailFilters = (value) => {
    if (getQuery.teamCategory !== undefined) {
      const parsedQuery = { ...getQuery, roleDetail: value };
      return navigate(qs.stringify(parsedQuery, { addQueryPrefix: true }));
    }
    return navigate(`/?roleDetail=${value}`);
  };

  const onChangeCategoryAllFilter = () => {
    if (getQuery.roleDetail !== undefined) {
      const parsedQuery = { ...getQuery };
      delete parsedQuery.teamCategory;
      return navigate(qs.stringify(parsedQuery, { addQueryPrefix: true }));
    }
    return navigate("/");
  };

  const onChangeTeamCategoryFilters = (value) => {
    if (getQuery.roleDetail !== undefined) {
      const parsedQuery = { ...getQuery, teamCategory: value };
      return navigate(qs.stringify(parsedQuery, { addQueryPrefix: true }));
    }
    return navigate(`/?teamCategory=${value}`);
  };

  return (
    <Container>
      <h3>완두콩 찾기</h3>
      <div className="filters-wrapper">
        <FilterContent>
          <span>직군콩 |</span>
          <ul>
            <Filter isChecked={getQuery.roleDetail === undefined} onClick={onChangeRoleDetailAllFilter}>
              <button>전체</button>
            </Filter>
            {roleData.map((role, index) => (
              <Filter
                key={index}
                isChecked={getQuery.roleDetail === role.value}
                onClick={() => onChangeRoleDetailFilters(role.value)}
              >
                <button>{role.label}</button>
              </Filter>
            ))}
          </ul>
        </FilterContent>
        <FilterContent>
          <span>카테고리 |</span>
          <ul>
            <Filter isChecked={getQuery.teamCategory === undefined} onClick={onChangeCategoryAllFilter}>
              <button>전체</button>
            </Filter>
            <Filter
              isChecked={getQuery.teamCategory === "portfolio"}
              onClick={() => onChangeTeamCategoryFilters("portfolio")}
            >
              <button>포트폴리오</button>
            </Filter>
            <Filter
              isChecked={getQuery.teamCategory === "side_project"}
              onClick={() => onChangeTeamCategoryFilters("side_project")}
            >
              <button>사이드 프로젝트</button>
            </Filter>
          </ul>
        </FilterContent>
      </div>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  margin: 32px 0 8px 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${colors.subBrand50};

  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: ${colors.grey900};
  }

  div.filters-wrapper {
    margin-top: 13px;
  }
`;

const FilterContent = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin: 0 0 8px 0;
  font-size: 12px;
  color: ${colors.grey900};

  span {
    flex: 0 0 52px;
    margin: 0;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 12px;
    overflow-y: hidden;
    scroll-behavior: smooth;

    li:last-child {
      margin-right: 28px;
    }
  }
`;

const Filter = styled.li<{ isChecked: boolean }>`
  display: block;

  button {
    border: 1px solid ${colors.subBrand600};
    padding: 6px 8px;
    border-radius: 32px;
    background: ${(props) => (props.isChecked ? colors.subBrand300 : colors.white)};
    box-shadow: 0 1px 3px rgba(181, 191, 197, 0.3);
    color: ${(props) => (props.isChecked ? colors.grey900 : colors.grey600)};
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    text-align: center;
    cursor: pointer;
  }
`;
