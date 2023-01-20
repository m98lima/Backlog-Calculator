import styled from "styled-components";

export const DisplayCardContainerFlex = styled.div`
  height: 130px;
  width: 250px;
  background-color: #4a4a4a;
  border: 6px solid #a1a1a1;
  border-radius: 11px;

  margin: 4px;

  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    border: 6px solid #198ce4;
    transition-duration: 0.2s;
  }
`;

export const CoverImageContainer = styled.img`
  max-height: 110px;
  max-width: 75px;
  border-radius: 4px;
  margin-left: 7px;
`;

export const GameInfoContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  margin-left: 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 55%;
`;

export const GameTitleContainer = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
  margin-top: 0px;

  width: 135px;
  height: 21px;
  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
`;

export const TimeEstimateContainerFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TimeLabelContainer = styled.p`
  font-size: 14px;
  font-weight: normal;
  margin: 1px;
  margin-inline: 0px;
`;

export const PlaytimeContainer = styled.div`
  background-color: #198ce4;
  width: 43px;
  height: 16px;
  text-align: center;
  border-radius: 15px;
  font-size: 11px;
`;

export const CardButtonContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;

export const CardButtonContainer = styled.button`
  background-color: #198ce4;
  color: white;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  border-radius: 100px;
  border: none;
  margin-top: 5px;
  padding: 0px;
  height: 20px;
  width: 20px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
