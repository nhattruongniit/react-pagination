import React from "react";
import styled from "styled-components";

const GridView = ({ id, title, body }) => {
  return (
    <>
      <CardStyled>
        <BoxStyled>
          <TitleStyled>
            <b>ID:</b> {id}
          </TitleStyled>
          <TitleStyled>
            <b>Title:</b> {title}
          </TitleStyled>
          <TitleStyled>
            <b>Body:</b> {body}
          </TitleStyled>
        </BoxStyled>
      </CardStyled>
    </>
  );
};

export default GridView;

const BoxStyled = styled.div`
  padding: 5px 10px;
`;

const CardStyled = styled.div`
  position: relative;
  border: 1px solid #525151;
  width: 30%;
  &:hover button {
    display: block;
  }
`;

const TitleStyled = styled.div`
  text-transform: capitalize;

  b {
    font-weight: bold;
  }
`;
