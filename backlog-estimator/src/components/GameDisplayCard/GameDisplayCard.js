import { useState } from "react";
import {
  CardButtonContainer,
  CardButtonContainerFlex,
  CoverImageContainer,
  CustomPlayTimeSelectorButtonContainer,
  CustomPlayTimeSelectorButtonRendererContainer,
  CustomPlaytimeSelectorContainerFlex,
  DisplayCardContainerFlex,
  GameInfoContainerFlex,
  GameTitleContainer,
  GameTitleTooltipContainer,
  PlaytimeContainer,
  TimeEstimateContainerFlex,
  TimeLabelContainer,
} from "./GameDisplayCard.styles";

const GameDisplayCard = ({
  gameInfo,
  handleButton,
  alreadyOnList,
  showCustomPlaytimeSelectors,
  customPlaytimeHandler,
}) => {
  const [isOnList, setIsOnList] = useState(alreadyOnList);
  const [selectedGameTime, setSelectedGameTime] = useState(
    gameInfo.chosenGameTime
  );

  const mainTime = "gameplayMain";
  const extraTime = "gameplayMainExtra";
  const compTime = "gameplayCompletionist";

  const handleClick = () => {
    let method;
    if (isOnList) {
      method = "remove";
    } else {
      method = "add";
    }
    handleButton(method);
    setIsOnList(!isOnList);
  };

  const handleCustomTimeSelector = (selectedGameTime) => {
    customPlaytimeHandler(selectedGameTime);
  };

  return (
    <DisplayCardContainerFlex>
      <CoverImageContainer src={gameInfo.imageUrl} />

      <GameInfoContainerFlex>
        <GameTitleTooltipContainer>{gameInfo.name}</GameTitleTooltipContainer>
        <GameTitleContainer>{gameInfo.name}</GameTitleContainer>

        <TimeEstimateContainerFlex>
          <TimeLabelContainer>Main Story</TimeLabelContainer>
          <PlaytimeContainer>{gameInfo.gameplayMain}h</PlaytimeContainer>
        </TimeEstimateContainerFlex>
        <TimeEstimateContainerFlex>
          <TimeLabelContainer>Main + extras</TimeLabelContainer>
          <PlaytimeContainer>{gameInfo.gameplayMainExtra}h</PlaytimeContainer>
        </TimeEstimateContainerFlex>
        <TimeEstimateContainerFlex>
          <TimeLabelContainer>Completionist</TimeLabelContainer>
          <PlaytimeContainer>
            {gameInfo.gameplayCompletionist}h
          </PlaytimeContainer>
        </TimeEstimateContainerFlex>
      </GameInfoContainerFlex>

      <CardButtonContainerFlex>
        <CardButtonContainer onClick={handleClick} alreadyOnList={isOnList}>
          +
        </CardButtonContainer>

        {showCustomPlaytimeSelectors && (
          <CustomPlaytimeSelectorContainerFlex>
            <CustomPlayTimeSelectorButtonContainer
              onClick={() => handleCustomTimeSelector(mainTime)}
            >
              <CustomPlayTimeSelectorButtonRendererContainer
                isSelected={gameInfo.chosenGameTime == mainTime}
              />
            </CustomPlayTimeSelectorButtonContainer>
            <CustomPlayTimeSelectorButtonContainer
              onClick={() => handleCustomTimeSelector(extraTime)}
            >
              <CustomPlayTimeSelectorButtonRendererContainer
                isSelected={gameInfo.chosenGameTime == extraTime}
              />
            </CustomPlayTimeSelectorButtonContainer>
            <CustomPlayTimeSelectorButtonContainer
              onClick={() => handleCustomTimeSelector(compTime)}
            >
              <CustomPlayTimeSelectorButtonRendererContainer
                isSelected={gameInfo.chosenGameTime == compTime}
              />
            </CustomPlayTimeSelectorButtonContainer>
          </CustomPlaytimeSelectorContainerFlex>
        )}
      </CardButtonContainerFlex>
    </DisplayCardContainerFlex>
  );
};

export default GameDisplayCard;
