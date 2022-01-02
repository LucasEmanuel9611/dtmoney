import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.40rem;
    border: 0.5px solid #e0e0e0;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background{
        background: var(--green);
        color: #fff;
        border: 0;
    }
  }
`;
