import styled from "styled-components";

export const ContentCardContainer = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: #000;
  color: #feea99;

  h5 {
    margin-bottom: 4px;
  }

  @media (min-width: 768px) {
    width: 100vw;
  }

  @media (min-width: 1500px) {
    width: 40vw;
  }
`;

export const StyledImage = styled.img`
  width: 90%;
  padding: 8px;
  border: 1px solid #feea99;

  @media (min-width: 768px) {
    width: 40%;
    height: 30vw;
  }

  @media (min-width: 1500px) {
    width: 60%;
    max-width: 900px;
    max-height: 600px;
  }
`;

export const StyledVideo = styled.iframe`
  width: 90%;
  height: 70vw;
  border: 1px solid #feea99;
  padding: 8px;

  @media (min-width: 768px) {
    width: 40%;
    height: 30vw;
  }

  @media (min-width: 1500px) {
    max-height: 400px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h5 {
    margin: 8px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
