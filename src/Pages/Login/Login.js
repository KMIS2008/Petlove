import { LoginForm } from "components/LogiForm/LoginForm";
import { Title } from "../../components/Title/Title";
import { PetBlock } from "components/PetBlock/PetBlock";
import {Container, Text, TextRegister, Span} from './Loginstyled';
import { Link } from 'react-router-dom';


export default function Login(){

    return (
        <div>
            <PetBlock/>
            <Container>
              <Title/>
              <Text>Welcome! Please enter your credentials to login to the platform:</Text>
              <LoginForm/>      
              <TextRegister>Don’t have an account? 
              <Link to="/register"><Span> Register </Span></Link>
                </TextRegister>         
            </Container>

        </div>
    )
}