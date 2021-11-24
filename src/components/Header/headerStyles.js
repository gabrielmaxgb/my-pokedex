import styled from 'styled-components';

export const HeaderButton = styled.button `
  padding: .6rem;
  background-color: #EE6B2F;
  border-radius: 8px;
  margin-left: 1rem;
  margin: .5rem;
  border: transparent;
  transition: box-shadow 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    box-shadow: 10px -6px white;
  }
`;