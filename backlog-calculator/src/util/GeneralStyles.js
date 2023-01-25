import styled from "styled-components";

export const TitleContainer = styled.h1`
  color: white;
  text-align: center;
  font-size: 60px;
  font-family: "Hahmlet";
  margin-top: ${(props) => props.marginTop};
`;

export const SearchBarContainer = styled.textarea`
  display: block;
  margin-inline: auto;
  resize: none;
  background-color: #5a5a5a;
  overflow-wrap: normal;
  overflow: hidden;
  white-space: nowrap;
  height: 23px;
  width: 435px;
  padding: none;
  margin-top: 7px;
  border: none;
  color: #ffffff;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ffffff;
    opacity: 20%;
  }
`;

export const OuterSearchBarContainer = styled.div`
  display: block;
  margin-inline: auto;
  background-color: #5a5a5a;
  border: ${(props) =>
    props.isEmpty ? "7px solid #a1a1a1" : "7px solid #198ce4"};
  transition-duration: 0.3s;
  border-radius: 40px;

  width: 460px;
  height: 35px;
  max-height: 35px;
`;

export const CardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  overflow-y: scroll;
  width: 80%;
  height: ${(props) => props.height};
  margin-top: 50px;
  margin-inline: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LoadingBubble = styled.div`
  height: 60px;
  width: 60px;
  border: 10px solid #198ce4;
  border-radius: 50%;

  margin-top: 50px;
  margin-inline: auto;

  @keyframes loadAnim {
    0% {
      width: 60px;
    }
    100% {
      width: 0px;
    }
  }
  animation: loadAnim 0.6s ease-in 0s infinite alternate;
`;
