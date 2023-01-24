import styled from "styled-components";

export const TitleContainer = styled.h1`
  color: white;
  text-align: center;
  font-size: 60px;
  font-family: "Hahmlet";
  margin-top: ${(props) =>
    props.currentPage == "/"
      ? "130px"
      : props.currentPage == "/my-list"
      ? "70px"
      : "0px"};
`;
