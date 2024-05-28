import styled from "styled-components";

export const Button = styled.button`
width: 119pxpx;
height: 48pxpx;
padding: 15px 39px 15px 39px;
margin-right: 10px;

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.03em;
text-align: lcenter;

border-radius: 30px;



border: 1px solid ${props => (props.$isHome ? '#FFFFFF' : '#262626')}; 
color: ${props => (props.$isHome ? '#FFFFFF' : '#262626')}; 

cursor: pointer;
transition: all 0.3s ease;

&:hover{
    border: 1px solid ${p=>p.theme.colors.yellow};
}
/* 

background-color: ${({ $isHome }) => ($isHome ? 'yellow' : 'white')};
  border: 2px solid ${({ $isHome }) => ($isHome ? 'white' : 'black')};
  color: ${({ $isHome }) => ($isHome ? 'black' : 'black')};
  

  &:hover {
    background-color: ${({ $isHome }) => ($isHome ? 'white' : 'yellow')};
    color: ${({ $isHome }) => ($isHome ? 'black' : 'black')};
    border: 2px solid ${({ $isHome }) => ($isHome ? 'black' : 'white')}; */

`


export const Container = styled.div`
/* @media (min-width: 768px) {

    display: block;
   
  } */
`
