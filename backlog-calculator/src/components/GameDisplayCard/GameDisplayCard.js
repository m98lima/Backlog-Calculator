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

const GameDisplayCard = () => {
  return (
    <DisplayCardContainerFlex>
      <CoverImageContainer src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Portal_caixa.jpg" />

      <GameInfoContainerFlex>
        <GameTitleContainer>Portal</GameTitleContainer>

        <TimeEstimateContainerFlex>
          <TimeLabelContainer>Main Story</TimeLabelContainer>
          <PlaytimeContainer>3h</PlaytimeContainer>
        </TimeEstimateContainerFlex>
        <TimeEstimateContainerFlex>
          <TimeLabelContainer>Main + extras</TimeLabelContainer>
          <PlaytimeContainer>13½h</PlaytimeContainer>
        </TimeEstimateContainerFlex>
        <TimeEstimateContainerFlex>
          <TimeLabelContainer>Completionist</TimeLabelContainer>
          <PlaytimeContainer>112h</PlaytimeContainer>
        </TimeEstimateContainerFlex>
      </GameInfoContainerFlex>

      <CardButtonContainerFlex>
        <CardButtonContainer>+</CardButtonContainer>
      </CardButtonContainerFlex>
    </DisplayCardContainerFlex>
  );
};

export default GameDisplayCard;
