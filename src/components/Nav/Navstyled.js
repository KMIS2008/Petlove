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
border: 1px solid #26262626;

&:hover{
    border: 1px solid ${p=>p.theme.colors.yellow};
}
`