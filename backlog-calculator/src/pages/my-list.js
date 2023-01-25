import GameDisplayCard from "@/components/GameDisplayCard/GameDisplayCard";
import {
  CardListContainer,
  OuterSearchBarContainer,
  SearchBarContainer,
  TitleContainer,
} from "@/util/GeneralStyles";
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
} from "./my-list.styles";

export default function MyList() {
  const [gameList, setGameList] = useState([]);
  const [gameFilter, setGameFilter] = useState("");
  const [totalGameTimes, setTotalGameTimes] = useState([0, 0, 0]);

  const handleGameList = (method, key, value) => {
    return localStorageGameListHandler(method, key, value);
  };

  useEffect(() => {
    let totalMain = 0;
    let totalExtras = 0;
    let totalComp = 0;

    gameList.forEach((elem) => {
      totalMain += elem.gameplayMain;
      totalExtras += elem.gameplayMainExtra;
      totalComp += elem.gameplayCompletionist;
    });

    setTotalGameTimes([totalMain, totalExtras, totalComp]);
  }, [gameList]);

  useEffect(() => {
    setGameList(handleGameList("list"));
  }, []);

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
              {gameList.map((elem) => (
                <GameDisplayCard
                  key={elem.id}
                  gameInfo={elem}
                  handleButton={(method) => {
                    handleGameList(method, elem.id, JSON.stringify(elem));
                    setGameList(handleGameList("list"));
                  }}
                  alreadyOnList={isGameOnTheList(elem.id)}
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
          </GameTimeSumResultsContainerFlex>
        </ListPageContainerFlex>
      </div>
    </>
  );
}
