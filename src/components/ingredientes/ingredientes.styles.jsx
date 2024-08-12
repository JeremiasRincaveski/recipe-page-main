import styled from "styled-components";

export const StyledIngredientes = styled.article`
  h2 {
    font-family: "Young Serif", serif;
    font-weight: 400;
    color: var(--brown800);
    margin: 1rem 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: .7rem;
    padding-left: 1.5rem;

    li {
      text-indent: .7rem;
    }
  }
`;