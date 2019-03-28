import React from "react";
import styled from "styled-components";
import { AppContext } from "../app/AppProvider";
import {fontSize1, greenBoxShadow, color3} from "../shared/Styles";


export const ConfirmedButtonStyled = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1};
  padding: 5px;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
  }
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

const ConfirmButton = () => {
    return (
        <AppContext.Consumer>
            {({confirmFavorites}) => <CenterDiv>
                <ConfirmedButtonStyled onClick={confirmFavorites}>
                    Confirm Favorites
                </ConfirmedButtonStyled>
            </CenterDiv>}
        </AppContext.Consumer>
    )
}

export default ConfirmButton
