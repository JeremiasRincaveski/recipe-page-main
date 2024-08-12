import styled from "styled-components";

export const StyledTimer = styled.article`
  background-color: var(--rose50);
  padding: 2rem;
  border-radius: 1rem;
  margin: 1rem 0;

  h2 {
    font-weight: 600;
    color: var(--rose800);
  }

  .wrapper {
    padding-left: 2rem;

    ul {
      display: flex;
      flex-direction: column;
      gap: .5rem;
      margin-top: 1rem;

      li {
        padding-left: 15px;
        
        span {
          font-weight: 600;
          text-transform: capitalize;
        }

        @media (max-width: 450px) {
          position: relative;
          list-style: none;

          &::after {
            content: '';
            position: absolute;
            left: -15px;
            top: 50%;
            transform: translateY(-50%);
            width: 6px; 
            height: 6px; 
            background-color: hsl(32, 10%, 34%); 
            border-radius: 50%; 
          }
        }
      }
    }
  }
  `