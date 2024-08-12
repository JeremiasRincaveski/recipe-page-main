import styled from "styled-components";

export const StyledNutricao = styled.article`
  h2 {
    font-family: "Young Serif", serif;
    font-weight: 400;
    color: var(--brown800);
    margin: 1rem 0;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 1.5rem;
  }

  tr {
    border: none;
    border-bottom: 1px solid var(--stone150);
    width: 100%;
  
    &:last-of-type {
      border: none;
    }
  }

  th,
  td {
    text-align: left;
    padding: .7rem 2rem;
    width: 50%;
  }

  th {
    font-weight: 300;
    text-transform: capitalize;
  }

  td {
    font-weight: 600;
  }
`