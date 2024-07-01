import styled from "styled-components";

export const Container = styled.div`
position: relative;
padding: 20px 0;
/* width: 100%; */
width: 293px;
/* height: 473px; */
`

export const SvgButton = styled.div`
display: block;
position:absolute;
right: 0; top: 0;
border: none;
margin-left: auto;
`

export const Title = styled.h5`
margin-bottom: ${p=>p.theme.spacing(4)};
font-family: Manrope;
font-size: 20px;
font-weight: 700;
line-height: 1;
text-align: left;
color: #2B2B2A;
`