import { useNavigate } from 'react-router-dom';
import {Button, Container} from './Navstyled';
import { useLocation } from 'react-router-dom';


export const Nav=()=>{
    const navigator = useNavigate(); 
    const location = useLocation();
    const isHome = location.pathname === '/home';

    return(
    
            <Container >
                <Button $isHome={isHome} type='button' onClick={() => navigator('news')}>News</Button>
                <Button $isHome={isHome} type='button' onClick={() => navigator('home')}>Find pet</Button>
                <Button $isHome={isHome} type='button' onClick={() => navigator('friends')}>Our friends</Button>
            </Container>   
    )
}