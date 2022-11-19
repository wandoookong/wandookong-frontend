import styled from "@emotion/styled";
import { roleData } from "../../teamRequestForm/utilities/roleData";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import { colors } from "../../../styles/colors";

interface Props {
  filters: TeamFilters;
  setFilters(value: TeamFilters): void;
}

export default function FindTeamFilter({ filters, setFilters }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });
    if (filters.roleDetail.length !== 0) {
      const parsedQuery = { ...query, roleDetail: filters.roleDetail };
      navigate(qs.stringify(parsedQuery, { addQueryPrefix: true }));
      return;
    }
    const parsedQuery = { ...query };
    delete parsedQuery.roleDetail;
    navigate(qs.stringify(parsedQuery, { addQueryPrefix: true }));
    return;
  }, [filters.roleDetail]);

  useEffect(() => {
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });
    if (filters.teamCategory.length !== 0) {
      const parsedQuery = { ...query, teamCategory: filters.teamCategory };
      navigate(qs.stringify(parsedQuery, { addQueryPrefix: true }));
      return;
    }
    const parsedQuery = { ...query };
    delete parsedQuery.teamCategory;
    navigate(qs.stringify(parsedQuery, { addQueryPrefix: true }));
    return;
  }, [filters.teamCategory]);

  return (
    <Container>
      <h3>완두콩 찾기</h3>
      <div className="filters-wrapper">
        <FilterContent>
          <span>직군콩 |</span>
          <ul>
            <Filter
              isChecked={filters.roleDetail.length === 0}
              onClick={() => setFilters({ ...filters, roleDetail: "" })}
            >
              전체
            </Filter>
            {roleData.map((role, index) => (
              <Filter
                key={index}
                isChecked={filters.roleDetail === role.value}
                onClick={() => {
                  setFilters({ ...filters, roleDetail: role.value });
                }}
              >
                {role.label}
              </Filter>
            ))}
          </ul>
        </FilterContent>
        <FilterContent>
          <span>카테고리 |</span>
          <ul>
            <Filter
              isChecked={filters.teamCategory.length === 0}
              onClick={() => setFilters({ ...filters, teamCategory: "" })}
            >
              전체
            </Filter>
            <Filter
              isChecked={filters.teamCategory === "portfolio"}
              onClick={() => setFilters({ ...filters, teamCategory: "portfolio" })}
            >
              포트폴리오
            </Filter>
            <Filter
              isChecked={filters.teamCategory === "side_project"}
              onClick={() => setFilters({ ...filters, teamCategory: "side_project" })}
            >
              사이드 프로젝트
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
  height: 100%;
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
    height: 29px;
    margin-left: 12px;
    overflow-y: hidden;
    scroll-behavior: smooth;

    li:last-child {
      margin-right: 28px;
    }
  }
`;

const Filter = styled.li<{ isChecked: boolean }>`
  border: 1px solid ${colors.subBrand600};
  padding: 6px 8px;
  border-radius: 32px;
  background: ${(props) => (props.isChecked ? colors.subBrand300 : colors.white)};
  box-shadow: 0 1px 3px rgba(181, 191, 197, 0.3);
  text-align: center;
  cursor: pointer;
`;
