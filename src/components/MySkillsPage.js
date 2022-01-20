import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  border-radius: 5%;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Source Sans Pro", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  @media (max-width: 40em) {
    height: 29vh;
    line-height: 1.75;
    display: flex;

    justify-content: space-evenly;
    margin-top: 5em;
    width: 45vw;
    padding: 1.5rem;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.5em + 1vw);
  padding: 0.5rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: justify;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend
          </Title>

          <Description>
            <ul>
              <li>Html</li>
              <li>CSS</li>
              <li>JS</li>
              <li>React</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>Material UI</li>
            </ul>
          </Description>
        </Main>

        <Main>
          <Title>
            <Design width={40} height={40} /> Backend
          </Title>

          <Description>
            <ul>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>Firebase</li>
              <li>MongoDB</li>
            </ul>
          </Description>
          <Description>
            <strong>Languages & Tools</strong>
            <p>Python,Github,VS Code,GitLab</p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
