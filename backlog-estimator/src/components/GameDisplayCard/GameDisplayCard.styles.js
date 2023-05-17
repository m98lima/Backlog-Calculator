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
  position: relative;
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

export const GameTitleTooltipContainer = styled.span`
  position: absolute;
  width: 100px;
  height: 21px;
  color: white;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 3;

  &:hover {
    color: white;
    position: absolute;
    top: 25px;
    left: 10px;
    height: auto;
    width: auto;
    overflow: visible;
    font-size: 12px;
    font-weight: normal;
    background-color: #242424;
    padding: 3px;
    border: 1px solid #198ce4;
    z-index: 100;
    
    @keyframes fadeIn {
      from {opacity: 0}
      to {opacity: 1}
    };

    animation: fadeIn 0.3s ease-out;

    box-shadow: 0px 0px 8px 0px #198ce4;
  }

  &:hover::before {
    content: "";
    position: absolute;
    height: 21px;
    width: 135px;
    top: -25px;
    left: -11px;
  }
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
  background-color: ${(props) => (props.alreadyOnList ? "#C60D0D" : "#198ce4")};
  transform: rotate(${(props) => (props.alreadyOnList ? "135deg" : "0deg")});
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

  transition: all 0.3s;

  &:focus {
    outline: none;
  }
`;

export const CustomPlaytimeSelectorContainerFlex = styled.div`
  margin-top: 12px;
  margin-left: 4px;
  height: 77px;
  width: 21px;
  border-radius: 20px;
  margin-right: 4px;
  background-color: #6e6e6e;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CustomPlayTimeSelectorButtonContainer = styled.button`
  height: 15px;
  width: 15px;
  cursor: pointer;
  margin-left: 2px;
  background-color: #6e6e6e;
  border: none;
`;

export const CustomPlayTimeSelectorButtonRendererContainer = styled.div`
  height: 15px;
  width: 15px;
  margin: 2px;
  border-radius: 10px;
  background-color: #198ce4;
  border: 1px solid #50b3ff;
  position: relative;
  left: -8px;
  top: -4px;

  transform: scale(${(props) => (props.isSelected ? 1 : 0)});
  transition: 0.3s ease-in;
`;
