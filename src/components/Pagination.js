import React from "react";
import styled from "styled-components";

import Pagination from "carbon-components-react/es/components/Pagination";

const Paging = ({ totalItems, onChangePagination }) => {
  return (
    <PagingStyled>
      <Pagination
        page={1}
        totalItems={totalItems}
        pageSize={1}
        pageSizes={[10, 20]}
        onChange={value => onChangePagination(value)}
      />
    </PagingStyled>
  );
};

export default Paging;

const PagingStyled = styled.div`
  margin-top: 30px;
`;
