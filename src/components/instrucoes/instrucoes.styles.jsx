import styled from "styled-components";

export const StyledInstrucoes = styled.article`
  h2 {
    font-family: "Young Serif", serif;
    font-weight: 400;
    color: var(--brown800);
    margin: 1rem 0;
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: .7rem;
    padding-left: 1.5rem;

    li {
      padding-left: .7rem;

      span {
        font-weight: 700;
      }
    }
  }
`