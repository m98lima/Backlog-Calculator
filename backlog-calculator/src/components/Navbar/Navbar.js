import { NavbarContainer, NavbarLinkContainer } from "./Navbar.styles";

const Navbar = ({ currentPage }) => {
  return (
    <NavbarContainer>
      <NavbarLinkContainer href={"/"} isCurrentPage={currentPage == "/"}>
        Home
      </NavbarLinkContainer>
      <NavbarLinkContainer
        href={"/my-list"}
        isCurrentPage={currentPage == "/my-list"}
      >
        My list
      </NavbarLinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;
