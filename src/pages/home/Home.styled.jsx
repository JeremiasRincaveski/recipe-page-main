import styled from "styled-components";

const StyledHome = styled.main`
  width: 730px;
  background-color: var(--white);
  padding: 2.5rem;
  margin: 7rem 0;
  border-radius: 1rem;
  color: var(--stone600);

  img {
    width: 100%;
    border-radius: .5rem;
  }

  h1 {
    font-family: "Young Serif", serif;
    font-weight: 400;
    color: var(--stone900);
    margin: 1rem 0;
  }

  hr {
    margin: 1.5rem 0;
    border-color: var(--rose50);
    opacity: .4;
  }

  @media (max-width: 500px) {
    width: 100vw;
    margin: 0;
    position: relative;
    padding: 0;

    img {
      border-radius: 0;
    }

    > .wrapper {
      padding: 0 2.5rem 3rem;
    }
  }
`;

export default StyledHome;