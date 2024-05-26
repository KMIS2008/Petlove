import styled from "styled-components";

export const Container = styled.div`
padding:0 ${p=>p.theme.spacing(4)};

@media (min-width: 768px) {
display: flex;
flex-direction: column;
}
`
export const Text = styled.p`
margin-bottom : ${p=>p.theme.spacing(4)};

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;
text-align: left;

@media (min-width: 768px) {
font-size: 18px;
line-height: 1,22;
}
`

export const TextRegister =styled.p`
font-family: Manrope;
font-size: 12px;
font-weight: 600;
line-height: 1,67;
letter-spacing: -0.03em;
text-align: left;
color: #262626;
text-align: center;
`

export const Span=styled.span`
color: ${p=>p.theme.colors.yellow};
cursor: pointer;
`


const shouldForwardProp = (prop) => !['isError'].includes(prop);

// Используем shouldForwardProp в компоненте styled для управления передачей свойств в DOM
export const Input = styled.input.attrs({ type: 'text' })`
  // Ваши стили для инпута
`;



export const Error = styled.p`
  font-family: Manrope;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.03em;
  text-align: left;
  color: #EF2447; 
`;


// Этот компонент может принимать свойство isError, которое будет передано в DOM
export const InputContainer = styled.div.withConfig({ shouldForwardProp })`
  position: relative;
  width: 100%;
  border: ${props => props.isError ? '1px solid red' : '1px solid #26262626'};
`;