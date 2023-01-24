import Link from "next/link";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  box-shadow: 0px -4px 10px #a1a1a1;
`;

export const NavbarLinkContainer = styled(Link)`
  color: ${(props) => (props.isCurrentPage ? "#198ce4" : "white")};
  font-size: 19px;
  margin-inline: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  text-decoration: none;

  display: inline-block;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scale(${(props) => (props.isCurrentPage ? 1 : 0)});
    height: 3px;
    bottom: 0px;
    left: 0px;
    background-color: ${(props) => (props.isCurrentPage ? "#198ce4" : "white")};
    transition: 0.2s ease-out;
  }
  &:hover::after {
    transform: scale(1);
    background-color: #198ce4;
  }
  &:hover {
    color: #198ce4;
  }
  transition: 0.2s ease-out;
`;
