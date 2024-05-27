import { ContainerButton, ButtonLogin,ButtonRegistration } from "./AuthNavstyled";
import { useNavigate } from 'react-router-dom';


export const AuthNav=({$isHome, onClose})=>{
    const navigator = useNavigate(); 

    const handleLoginClick = () => {
        navigator('login');
        onClose();
    };

    const handleRegisterClick = () => {
        navigator('register');
        onClose();
    };

    return (
         <div>
  
             <ContainerButton >
                 <ButtonLogin $isHome={$isHome} type='button' 
                     onClick={handleLoginClick}>Login</ButtonLogin>   

                 <ButtonRegistration type='button' 
                      onClick={handleRegisterClick}>Registration</ButtonRegistration>
            </ContainerButton>   

         </div>
    )
}



