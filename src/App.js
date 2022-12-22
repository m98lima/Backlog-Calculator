import { SearchBarContainer, TitleContainer } from "./App.styles";


function App() {
  return (
    <div className="App">
      <TitleContainer>Backlog estimator</TitleContainer>

      <SearchBarContainer placeholder="Search for a game..." cols="57" rows="1" />

    </div>
  );
}

export default App;
