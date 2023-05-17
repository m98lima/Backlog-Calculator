import { NavbarContainer, NavbarLinkContainer } from "./Navbar.styles";

const Navbar = ({ currentPage }) => {
  const homeURL = "/";
  const listURL = "/my-list";

  return (
    <NavbarContainer>
      <NavbarLinkContainer
        href={homeURL}
        isCurrentPage={currentPage == homeURL}
      >
        Home
      </NavbarLinkContainer>
      <NavbarLinkContainer
        href={listURL}
        isCurrentPage={currentPage == listURL}
      >
        My list
      </NavbarLinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;
