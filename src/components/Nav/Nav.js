import { useNavigate } from 'react-router-dom';
import {Button} from './Navstyled';


export const Nav=()=>{
    const navigator = useNavigate(); 

    return(
    
            <nav>
                <Button type='button' onClick={() => navigator('news')}>News</Button>
                <Button type='button' onClick={() => navigator('home')}>Find pet</Button>
                <Button type='button' onClick={() => navigator('friends')}>Our friends</Button>
            </nav>   
      
    )
}