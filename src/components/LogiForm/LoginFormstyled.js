import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  margin: 0 auto;
  text-align: left;
  width: 100%;
  height: 42px;
  padding: 12px;
  border-radius: 30px;
  border: 2px solid ${({ isError, isSuccess }) => (isError ? 'red' : isSuccess ? 'green' : '#26262626')};
  outline: none;
  font-size: 14px;
  color: #333;
  &::placeholder {
    color: #aaa;
  }
`;

export const ButtonEye = styled.button`
  position: absolute;
  top: 20%;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
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

export const Button = styled.button`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  height: 42px;
  padding: 12px 0;
  border-radius: 30px;
  background-color: ${p => p.theme.colors.yellow};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #FFFFFF;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
`;

export const ValidationIcon = styled.div`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
`;


   /* margin-top: 10px;
   background-color: ${p=>p.theme.colors.darkblue};
   border: 3px solid ${p=>p.theme.colors.gray};
   border-radius: 5px;
   color: ${p=>p.theme.colors.rose};
   flex-grow: 1;
   font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
   font-size: 15px;
   height: 36px;
   line-height: 20px;
   min-width: 180px; 
   padding: 0 15px; */
   /* cursor: pointer; */

 /* &:hover {
  background-color: ${p=>p.theme.colors.gray};
  cursor: pointer;} */
