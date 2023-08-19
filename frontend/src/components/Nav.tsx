import styled from 'styled-components';
import Logo from '../assets/images/logo.png';
import SitLogo from '../assets/images/sitlogo.png';
import SitLogoShort from '../assets/images/sitlogo_short.png';

const NavContainer = styled.div`
  // padding: 2rem;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: top;
  width: 100%;
  font-size: 1.5rem;
`;

const LogoImage = styled.img`
  width: 20vw;
  height: auto;

  /* iPhone */
  @media (max-width: 375px) {
    min-width: 120px;
    max-width: 60vw;
  }

  /* Between iPhone and iPad */
  @media (min-width: 376px) and (max-width: 767px) {
    min-width: 150px; 
    max-width: 40vw; 

  /* iPad */
  @media (min-width: 768px) and (max-width: 1024px) {
    min-width: 180px;
    max-width: 30vw;
  }

  /* PC */
  @media (min-width: 1025px) {
    min-width: 200px;
    max-width: 20vw;
  }
`;

const FacultyLogo = styled.img`
  max-height: 3vw;
  max-width: auto;

  @media (min-width: 1025px) {
    max-height: 3vw;
    max-width: auto;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-height: 4vw;
    max-width: auto;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const FacultyLogoShort = styled.img`
  @media (min-width: 1025px) {
    display: none;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 768px) {
    max-height: 8vw;
    max-width: auto;
  }
`;

function Nav({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavContainer>
        <LogoImage src={Logo} alt="Code of Aquatia Logo" />
        <FacultyLogo src={SitLogo} alt="SIT Logo" />
        <FacultyLogoShort src={SitLogoShort} alt="SIT Logo Short" />
      </NavContainer>
      {children}
    </>
  );
}

export default Nav;
