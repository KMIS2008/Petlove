import sprite from '../../images/sprite.svg';
import {Button,Title, Img, ContainerList, ContainerTitle, ContainerPopulate,
        Rating, TitleTable, Comment, ContainerButton, ContainerItem, ButtonSVG
} from './NoticeItrm.styled';
 
export const NoticesItem=({notice})=>{

    const {imgURL ,title, popularity, comment, name, birthday, species, category}=notice;

    return(
        <ContainerItem>
            <Img src= {imgURL} alt={title}/>
           <ContainerTitle>
              <Title>{title}</Title>
              <ContainerPopulate>
                 <svg width={16} height={16}>
                    <use xlinkHref={sprite + '#icon-star'} />
                 </svg>      
                 <Rating>{popularity}</Rating>          
              </ContainerPopulate>
            </ContainerTitle>  

            <ContainerList>

                <li>
                    <TitleTable>Name</TitleTable>
                    <p>{name}</p>
                </li>
                <li>
                    <TitleTable>Birthday</TitleTable>
                    <p>{birthday}</p>
                </li>
                <li>
                    <TitleTable>Species</TitleTable>
                    <p>{species}</p>
                </li>
                <li>
                    <TitleTable>Category</TitleTable>
                    <p>{category}</p>
                </li>
                 
            </ContainerList>
            
           <Comment>{comment}</Comment>
           <ContainerButton>
            
               <Button type='button'>Learn more</Button>
               <ButtonSVG>
                   <svg width={18} height={18}>
                      <use xlinkHref={sprite + '#icon-heart'} />
                   </svg>                
               </ButtonSVG>

           </ContainerButton>
        
        </ContainerItem>
    )
}