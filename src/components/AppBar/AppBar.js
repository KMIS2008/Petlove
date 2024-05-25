import { AuthNav } from "components/AuthNav/AuthNav";
import { Logo } from "components/Logo/Logo";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "redux/hook/useAuth";
import { Header, ContainerNav, Svg } from "./AppBarstyled";
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import sprite from '../../images/sprite.svg';
import {Nav} from '../Nav/Nav';
import {BurgerMenu} from '../BurgerMenu/BurgerMenu';


export function AppBar(){
    const {isLoggedIn} = useAuth();
    const location = useLocation();
    const isHome = location.pathname === '/home';

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isTablet, setisTablet] = useState(window.innerWidth < 1280);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen =()=>{
      setIsOpen (!isOpen)
    }

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    useEffect(() => {
        const handleResize = () => {
          setisTablet(window.innerWidth < 1280);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    return(

      <Header $isHome={isHome}>
            <Logo/>
            {isLoggedIn && <UserMenu/>}

            {!isTablet && <Nav/>}

            <ContainerNav>
              {!isMobile&&   <AuthNav $isHome={isHome}/>}

              {isTablet && <Svg onClick={handleOpen}>
                <use xlinkHref={sprite + (isHome ? '#icon-menu-01' : '#icon-menu-2')}/>
               </Svg> }               
            </ContainerNav>
            
              {isOpen && isTablet && <BurgerMenu onClose={handleOpen} />}
        </Header>
   
        
    )
}
