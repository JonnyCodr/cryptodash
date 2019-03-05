import React from "react";
import styled from "styled-components";
import { AppContext } from "../app/AppProvider";


export const ConfirmedButtonStyled = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
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
