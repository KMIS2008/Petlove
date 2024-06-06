import sprite from '../../images/sprite.svg';
import {Button} from './NoticeItrm.styled';
 
export const NoticesItem=({notice})=>{
    const[imgURL,title, popularity, comment, name, birthday, species, category]=notice;
    return(
        <li>
           <img src={imgURL} alt={title}/>
           <div>
              <h3>{title}</h3>
              <div>
                 <svg>
                    <use xlinkHref={sprite + '#icon-star'} />
                 </svg>      
                 <p>{popularity}</p>          
              </div>
            <ul>
                <li>
                    <p>Name</p>
                    <p>{name}</p>
                </li>
                <li>
                    <p>Birthday</p>
                    <p>{birthday}</p>
                </li>
                <li>
                    <p>Species</p>
                    <p>{species}</p>
                </li>
                <li>
                    <p>Category</p>
                    <p>{category}</p>
                </li>
                 
            </ul>
            
           </div>
           <p>{comment}</p>
           <div>
               <Button type='button'>Learn more</Button>
               <button>
                   <svg width={18} height={18}>
                      <use xlinkHref={sprite + '#icon-heart'} />
                   </svg>                
               </button>

           </div>
        
        </li>
    )
}