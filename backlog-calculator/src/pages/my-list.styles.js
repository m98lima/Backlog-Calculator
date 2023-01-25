import styled from "styled-components";

export const ListPageContainerFlex = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
  margin-top: 60px;
  justify-content: space-between;
`;

export const GameListSectionContainerFlex = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 60%;
`;

export const GameTimeSumResultsContainerFlex = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
  color: white;
`;

export const GameTimeLabelContainer = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const TotalGameTimeContainer = styled.div`
  background-color: #198ce4;
  width: 90px;
  height: 30px;
  text-align: center;
  border-radius: 30px;
  font-size: 20px;
  padding-top: 7px;
  margin-bottom: 30px;
`;
