import sprite from '../../images/sprite.svg';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Nav } from 'components/Nav/Nav';
import { BurgerMenuContainer, CloseIcon} from './BurgerMenu.styled';
import { useLocation } from 'react-router-dom';
import { useAuth } from "redux/hook/useAuth";
import { UserNav } from 'components/UserNav/UserNav';


export const BurgerMenu=({ onClose })=>{
    const location = useLocation();
    const isHome = location.pathname === '/home';
    const {isLoggedIn} = useAuth();

    return(
        <BurgerMenuContainer $isHome={isHome}>
            <CloseIcon onClick={onClose}>
                <use xlinkHref={sprite + '#icon-x'}/>
            </CloseIcon> 

            <Nav isOpen={true} onClose= {onClose}/>

            {isLoggedIn && <UserNav isOpen={true} onClose= {onClose}/>}
 
            {!isLoggedIn && <AuthNav isOpen={true} onClose= {onClose}/> } 
         
        </BurgerMenuContainer>

    )
}