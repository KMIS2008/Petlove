import sprite from '../../images/sprite.svg';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Nav } from 'components/Nav/Nav';
import { BurgerMenuContainer, CloseIcon} from './BurgerMenu.styled';
import { useLocation } from 'react-router-dom';


export const BurgerMenu=({ onClose })=>{
    const location = useLocation();
    const isHome = location.pathname === '/home';

    return(
        <BurgerMenuContainer $isHome={isHome}>
            <CloseIcon onClick={onClose}>
                <use xlinkHref={sprite + '#icon-x'}/>
            </CloseIcon> 

            <Nav/>
 
            <AuthNav/>   
         
        </BurgerMenuContainer>

    )
}