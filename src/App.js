import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Paging from "./components/Pagination";
import TableView from "./components/TableView";
import GridView from "./components/GridView";
import Options from "./components/Options";

//css
import "carbon-components/css/carbon-components.min.css";

// actions
import { fetchPosts, setPagination } from "./actions";

function App({
  typeView,
  posts,
  page,
  pageSize,
  totalItems,
  fetchPosts,
  setPagination
}) {
  useEffect(() => {
    fetchPosts(page, pageSize);
  }, []);

  const _onChangePagination = value => {
    setPagination(value);
    fetchPosts(value.page, value.pageSize);
  };

  return (
    <>
      <Options />
      {typeView === "grid-view" && (
        <>
          <h4>Grid View</h4>
          <ContainerStyled>
            <GridStyled>
              {posts.map(post => (
                <GridView
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  body={post.body}
                />
              ))}
            </GridStyled>
          </ContainerStyled>
        </>
      )}
      {typeView === "table-view" && <TableView posts={posts} />}
      <Paging
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
        onChangePagination={_onChangePagination}
      />
    </>
  );
}

const mapStateToProps = state => {
  const {
    typeView,
    posts,
    totalItems,
    metadata: { page, pageSize }
  } = state;
  return {
    typeView,
    posts,
    page,
    pageSize,
    totalItems
  };
};

const mapDispatchToProps = {
  fetchPosts,
  setPagination
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const ContainerStyled = styled.div`
  margin: 0 auto;
`;

const GridStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  > * {
    flex: 0 0 32%;
    margin: 1% 0;
  }
  > :nth-child(3n-1) {
    margin-left: 2%;
    margin-right: 2%;
  }
`;
