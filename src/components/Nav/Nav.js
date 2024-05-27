import { useNavigate } from 'react-router-dom';
import {Button, Container} from './Navstyled';
import { useLocation } from 'react-router-dom';


export const Nav=({onClose})=>{
    const navigator = useNavigate(); 
    const location = useLocation();
    const isHome = location.pathname === '/home';

    const handleNewsClick = () => {
        navigator('news');
        onClose();
    };

    const handdleNoticesClick=()=>{
        navigator('notices');
        onClose();
    }

    const handleFriendsClick=()=>{
        navigator('friends');
        onClose();
    }

    return(
    
            <Container >
                <Button $isHome={isHome} type='button' onClick={handleNewsClick}>News</Button>
                <Button $isHome={isHome} type='button' onClick={handdleNoticesClick}>Find pet</Button>
                <Button $isHome={isHome} type='button' onClick={handleFriendsClick}>Our friends</Button>
            </Container>   
    )
}