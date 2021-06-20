import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-around;
  }

  @media (min-width: 1500px) {
    width: 98vw;
  }
`;

export const PageContainer = styled.div`
  text-align: center;

  h1 {
    background-color: #feea99;
    margin: 16px auto;
    padding: 18px;

    display: inline-block;
  }
`;
