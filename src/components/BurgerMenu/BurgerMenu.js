import sprite from '../../images/sprite.svg';
import { useNavigate } from 'react-router-dom';
import { AuthNav } from 'components/AuthNav/AuthNav';


export const BurgerMenu=()=>{
    const navigator = useNavigate(); 


    return(
        <>
            <svg>
                <use xlinkHref={sprite + '#icon-x'}/>
            </svg> 
            <nav>
                <button type='button' onClick={() => navigator('news')}>News</button>
                <button type='button' onClick={() => navigator('home')}>Find pet</button>
                <button type='button' onClick={() => navigator('friends')}>Our friends</button>
            </nav>   

            <AuthNav/> 

        </>

    )
}