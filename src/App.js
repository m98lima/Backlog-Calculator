import {
  OuterSearchBarContainer,
  SearchBarContainer,
  TitleContainer,
} from "./App.styles";

function App() {
  return (
    <div className="App">
      <TitleContainer>Backlog estimator</TitleContainer>

      <OuterSearchBarContainer>
        <SearchBarContainer
          placeholder="Search for a game..."
          cols="57"
          rows="1"
        />
      </OuterSearchBarContainer>
    </div>
  );
}

export default App;
