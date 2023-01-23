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

const GameDisplayCard = ( { gameInfo, addFunc } ) => {
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
          <PlaytimeContainer>{gameInfo.gameplayCompletionist}h</PlaytimeContainer>
        </TimeEstimateContainerFlex>
      </GameInfoContainerFlex>

      <CardButtonContainerFlex>
        <CardButtonContainer onClick={addFunc} >+</CardButtonContainer>
      </CardButtonContainerFlex>
    </DisplayCardContainerFlex>
  );
};

export default GameDisplayCard;
