import styled from "@emotion/styled";
import { roleData } from "../../teamRequestForm/utilities/roleData";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import { colors } from "../../../components/styles/colors";

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
          <div className="label-wrapper">
            <p>직군콩 |</p>
            <Label checked={filters.roleDetail.length === 0} onClick={() => setFilters({ ...filters, roleDetail: "" })}>
              전체
            </Label>
            {roleData.map((role) => (
              <Label
                key={role.id}
                checked={filters.roleDetail === role.value}
                onClick={() => {
                  setFilters({ ...filters, roleDetail: role.value });
                }}
              >
                {role.label}
                <input type="radio" />
              </Label>
            ))}
          </div>
        </FilterContent>
        <FilterContent>
          <div className="label-wrapper">
            <p>카테고리 |</p>
            <Label
              checked={filters.teamCategory.length === 0}
              onClick={() => setFilters({ ...filters, teamCategory: "" })}
            >
              전체
            </Label>
            <Label
              checked={filters.teamCategory === "portfolio"}
              onClick={() => setFilters({ ...filters, teamCategory: "portfolio" })}
            >
              포트폴리오
              <input type="radio" />
            </Label>
            <Label
              checked={filters.teamCategory === "side_project"}
              onClick={() => setFilters({ ...filters, teamCategory: "side_project" })}
            >
              사이드 프로젝트 <input type="radio" />
            </Label>
          </div>
        </FilterContent>
      </div>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  margin: 32px 0 0 20px;
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
  height: 100%;
  white-space: nowrap;
  margin: 0 0 8px 0;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  p {
    display: inline-block;
    font-size: 12px;
    color: ${colors.grey900};
    margin: 0;
  }

  div.label-wrapper {
    display: flex;
    align-items: center;

    p {
      margin: 0;
      flex: 0 0 45px;
      padding-right: 12px;
      color: ${colors.grey900};
      text-align: right;
    }
  }
`;

const Label = styled.label<{ checked: boolean }>`
  margin-right: 8px;
  background: ${(props) => (props.checked ? colors.subBrand300 : colors.white)};
  border: 1px solid ${colors.subBrand600};
  padding: 6px 8px;
  border-radius: 32px;
  font-size: 12px;
  color: ${colors.grey900};
  box-shadow: 0 1px 3px rgba(181, 191, 197, 0.3);

  input {
    display: none;
  }
  //FIXME 마지막 요소 마진값
  &:last-child {
    margin-right: 100px;
  }
`;
