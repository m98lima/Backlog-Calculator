import GameDisplayCard from "@/components/GameDisplayCard/GameDisplayCard";
import {
  CardListContainer,
  OuterSearchBarContainer,
  SearchBarContainer,
  TitleContainer,
} from "@/styles/GeneralStyles";
import localStorageGameListHandler, {
  isGameOnTheList,
} from "@/util/localStorageGameListHandler";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  GameListSectionContainerFlex,
  GameTimeLabelContainer,
  GameTimeSumResultsContainerFlex,
  ListPageContainerFlex,
  TotalGameTimeContainer,
} from "../styles/my-list.styles";

export default function MyList() {
  const [gameList, setGameList] = useState([]);
  const [gameFilter, setGameFilter] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [totalGameTimes, setTotalGameTimes] = useState([0, 0, 0, 0]);

  const handleGameList = (method, key, value) => {
    return localStorageGameListHandler(method, key, value);
  };

  const handleSelectCustomPlaytimeCallback = (gameInfo) => {
    return (selectedGameTime) => {
      let newGameInfo = gameInfo;
      newGameInfo.chosenGameTime = selectedGameTime;
      handleGameList("remove", newGameInfo.id);
      handleGameList("add", newGameInfo.id, JSON.stringify(newGameInfo));
      setGameList(handleGameList("list"));
    };
  };

  useEffect(() => {
    let totalMain = 0;
    let totalExtras = 0;
    let totalComp = 0;
    let totalCustom = 0;

    gameList.forEach((elem) => {
      totalMain += elem.gameplayMain;
      totalExtras += elem.gameplayMainExtra;
      totalComp += elem.gameplayCompletionist;
      totalCustom += elem[elem.chosenGameTime];
    });

    setTotalGameTimes([totalMain, totalExtras, totalComp, totalCustom]);
  }, [gameList]);

  useEffect(() => {
    setGameList(handleGameList("list"));
  }, []);

  useEffect(() => {
    const filter = gameFilter.toLowerCase();
    setFilteredList(
      gameList.filter((elem) => {
        const gameName = elem.name.toLowerCase();
        return gameName.includes(filter);
      })
    );
  }, [gameFilter, gameList]);

  return (
    <>
      <Head>
        <title>My list | Backlog estimator</title>
      </Head>
      <div>
        <TitleContainer marginTop={"70px"}>Backlog estimator</TitleContainer>
        <ListPageContainerFlex>
          <GameListSectionContainerFlex>
            <OuterSearchBarContainer isEmpty={gameFilter.length == 0}>
              <SearchBarContainer
                placeholder="Search for a game...."
                cols="57"
                rows="1"
                onChange={(e) => setGameFilter(e.target.value)}
              />
            </OuterSearchBarContainer>
            <CardListContainer height={"560px"}>
              {filteredList.map((elem) => (
                <GameDisplayCard
                  key={elem.id}
                  gameInfo={elem}
                  handleButton={(method) => {
                    handleGameList(method, elem.id, JSON.stringify(elem));
                    setGameList(handleGameList("list"));
                  }}
                  alreadyOnList={isGameOnTheList(elem.id)}
                  showCustomPlaytimeSelectors={true}
                  customPlaytimeHandler={handleSelectCustomPlaytimeCallback(
                    elem
                  )}
                />
              ))}
            </CardListContainer>
          </GameListSectionContainerFlex>

          <GameTimeSumResultsContainerFlex>
            <GameTimeLabelContainer>Main story</GameTimeLabelContainer>
            <TotalGameTimeContainer>
              {totalGameTimes[0]}h
            </TotalGameTimeContainer>
            <GameTimeLabelContainer>Main + extras</GameTimeLabelContainer>
            <TotalGameTimeContainer>
              {totalGameTimes[1]}h
            </TotalGameTimeContainer>
            <GameTimeLabelContainer>Completionist</GameTimeLabelContainer>
            <TotalGameTimeContainer>
              {totalGameTimes[2]}h
            </TotalGameTimeContainer>
            <GameTimeLabelContainer>Custom</GameTimeLabelContainer>
            <TotalGameTimeContainer>
              {totalGameTimes[3]}h
            </TotalGameTimeContainer>
          </GameTimeSumResultsContainerFlex>
        </ListPageContainerFlex>
      </div>
    </>
  );
}
