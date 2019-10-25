import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { RadioButton } from "carbon-components-react";

// action
import { changeTypeView } from "../actions";

function Options({ changeTypeView }) {
  return (
    <OptionStyled>
      <h4>Select Options:</h4>
      <RadioStyled>
        <RadioButton
          defaultChecked
          name="view"
          value="grid-view"
          labelText="Grid View"
          onChange={value => changeTypeView(value)}
        />
        <RadioButton
          name="view"
          value="table-view"
          labelText="Table View"
          onChange={value => changeTypeView(value)}
        />
      </RadioStyled>
    </OptionStyled>
  );
}

const mapDispatchToProps = {
  changeTypeView
};

export default connect(
  null,
  mapDispatchToProps
)(Options);

const OptionStyled = styled.div`
  margin-bottom: 30px;
`;

const RadioStyled = styled.div`
  display: flex;
`;
