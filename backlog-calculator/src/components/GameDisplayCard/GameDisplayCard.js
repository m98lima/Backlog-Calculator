import { useState } from "react";
import {
  CardButtonContainer,
  CardButtonContainerFlex,
  CoverImageContainer,
  DisplayCardContainerFlex,
  GameInfoContainerFlex,
  GameTitleContainer,
  PlaytimeContainer,
  TimeEstimateContainerFlex,
  TimeLabelContainer,
} from "./GameDisplayCard.styles";

const GameDisplayCard = ({ gameInfo, handleButton, alreadyOnList }) => {
  const [isOnList, setIsOnList] = useState(alreadyOnList);

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

  return (
    <DisplayCardContainerFlex>
      <CoverImageContainer src={gameInfo.imageUrl} />

      <GameInfoContainerFlex>
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
      </CardButtonContainerFlex>
    </DisplayCardContainerFlex>
  );
};

export default GameDisplayCard;
