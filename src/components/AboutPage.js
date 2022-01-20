import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import medusa from "../assets/Images/medusa.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;

  width: 39vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;

  @media (max-width: 40em) {
    font-size: calc(0.7rem + 1vw);
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={medusa} alt="spaceman" />
        </Spaceman>
        <Main>
          I'm a Front end developer, budding Full Stack developer and AI/ML
          enthusiats. I love creating aesthetic websites with great UX.
          <br /> <br />
          I'm interested in trying new technologies, tech stacks and building
          great projects. I'm a tech blogger. I love to write blogs, read books
          and I have a great taste in Music.
          <br /> <br />I believe everything is an Art when you put your
          consciousness in it. You can connect with me via social links.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
