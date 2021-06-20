import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 10px;
  text-align: center;
`;

export const LoadingItem = styled.span`
  background-color: #000;
  width: 20px;
  height: 20px;
  display: inline-block;
  border-radius: 50%;
  animation: animate 2s linear infinite;
  opacity: 0;
  margin: 0 4px;

  &:nth-child(1) {
    animation-delay: 0.8s;
  }

  &:nth-child(2) {
    animation-delay: 0.4s;
  }

  &:nth-child(3) {
    animation-delay: 0s;
  }

  @keyframes animate {
    0% {
      transform: translateX(-160px);
      opacity: 0;
    }
    25% {
      transform: translateX(0);
      opacity: 1;
    }
    50% {
      transform: translateX(0);
      opacity: 1;
    }
    75% {
      transform: translateX(0);
      opacity: 1;
    }
    90% {
      transform: translateX(150px);
      opacity: 0;
    }
    100% {
      transform: translateX(160px);
      opacity: 0;
    }
  }
`;
