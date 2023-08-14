import { styled } from 'styled-components';

const StyledMermaidImage = styled.img`
  max-height: 40vh;
  animation: moving 1.5s infinite alternate;
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.40));

  @keyframes moving {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-20px);
  }
`;

export default StyledMermaidImage;
