import { NavbarContainer, NavbarLinkContainer } from "./Navbar.styles";

const Navbar = () => {
  return <NavbarContainer>
    <NavbarLinkContainer href={"/"} >Home</NavbarLinkContainer>
    <NavbarLinkContainer href={"/my-list"} >My list</NavbarLinkContainer>
  </NavbarContainer>;
};

export default Navbar;
