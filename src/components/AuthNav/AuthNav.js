import sprite from '../../images/sprite.svg';
import { ContainerButton, ButtonLogin,ButtonRegistration, Svg } from "./AuthNavstyled";
import { useNavigate } from 'react-router-dom';

import React, { useState, useEffect} from 'react';

export const AuthNav=({$isHome})=>{
    const navigator = useNavigate(); 


    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
         <div>

            {isMobile?
               <Svg>
                <use xlinkHref={sprite + ($isHome ? '#icon-menu-01' : '#icon-menu-2')}/>
               </Svg>   
            :    
             <ContainerButton>
        <ButtonLogin type='button' 
                     onClick={() => navigator('login')
                      
                     }>Login</ButtonLogin>       
        <ButtonRegistration type='button' onClick={() => navigator('register')}>Registration</ButtonRegistration>
            </ContainerButton>   }

          </div>
    )
   
}



