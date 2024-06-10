import styled from "styled-components";

export const ContainerItem = styled.li`
padding: 20px;

@media (min-width: 768px) {
    width: 100%; 
    /* max-width: 342px;  */
    margin: 0 auto; 
}

/* @media (min-width: 1280px) {
    max-width: 363px
} */
`
export const Img = styled.img`
border-radius: 16px;
margin-bottom: 20px;
`

export const Title = styled.h3`
font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: 1,25;
color: #2B2B2A;
`

export const Rating = styled.p`
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
`

export const ContainerList= styled.ul`
display: flex;
justify-content: space-between;
list-style: none;
margin-bottom: 14px;
`

export const ContainerTitle= styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 5px;
`

export const ContainerPopulate= styled.div`
display: flex;
gap:2px;
justify-content: center;
align-items: center;
`

export const TitleTable= styled.p`
font-family: Manrope;
font-size: 10px;
font-weight: 500;
line-height: 1,4;
letter-spacing: -0.02em;
color: #26262680;
`

export const TextTable= styled.p`
font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,4;
letter-spacing: -0.02em;
color: #262626;
`

export const Comment= styled.p`
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;

color: #2B2B2A;
`

export const ContainerButton= styled.div`
display: flex;
justify-content: space-between;
`

export const Button = styled.button`
width: 231px;
height: 46px;

border-radius: 30px ;
background: #F6B83D;

background: ${p => p.theme.colors.yellow};

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29px;
letter-spacing: -0.03em;
text-align: center;
background: ${p=>p.theme.colors.white};
`