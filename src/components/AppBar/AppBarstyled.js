import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  margin: 0 auto;
  border-radius: 30px 30px 0 0;
  background-color: ${props => (props.$isHome ? '#F6B83D' : '#FFFFFF')}; 

  @media (min-width: 768px) {
    padding: 16px 32px;

  }

  @media (min-width: 1280px) {
    padding: 16px 64px;

}
`