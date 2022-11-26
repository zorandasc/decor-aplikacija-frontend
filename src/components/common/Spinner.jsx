import React from "react";
import styled, { keyframes } from "styled-components";

import spinner from "../../logo.svg";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = () => {
  return (
    <Wrapper>
      <img src={spinner} alt="Loading..." />
      <h1>Loading ... </h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  color: rgb(103, 179, 230);
  img {
    color: rgb(103, 179, 230);
    width: 340px;
    margin: auto;
    display: block;
    animation: ${spin} 3s linear infinite;
  }
`;

export default Spinner;
