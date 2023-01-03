import styled from "styled-components";

export const TitleContainer = styled.h1`
  color: white;
  text-align: center;
  font-size: 60px;
  font-family: "Hahmlet";
  margin-top: 150px;
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
  border: 7px solid #a1a1a1;
  border-radius: 40px;

  max-width: 460px;
  height: 35px;
  max-height: 35px;
`;
