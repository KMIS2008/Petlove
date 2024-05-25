import { ContainerButton, ButtonLogin,ButtonRegistration } from "./AuthNavstyled";
import { useNavigate } from 'react-router-dom';


export const AuthNav=({$isHome})=>{
    const navigator = useNavigate(); 

    return (
         <div>
  
             <ContainerButton >
                 <ButtonLogin $isHome={$isHome} type='button' 
                     onClick={() => navigator('login')}>Login</ButtonLogin>   

                 <ButtonRegistration type='button' 
                      onClick={() => navigator('register')}>Registration</ButtonRegistration>
            </ContainerButton>   

         </div>
    )
}



