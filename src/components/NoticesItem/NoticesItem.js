import sprite from '../../images/sprite.svg';
import {Button,Title, Img, ContainerList, ContainerTitle, ContainerPopulate,
        Rating, TitleTable, Comment, ContainerButton, ContainerItem, ButtonSVG
} from './NoticeItrm.styled';
import {ModalAttention} from '../ModalAttention/ModalAttention';
import {ModalNotice} from '../ModalNotice/ModalNotice';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {selectIsLoggedIn} from '../../redux/auth/selects';
import {addNotices} from '../../redux/operations';

 
export const NoticesItem=({notice})=>{
    const dispatch=useDispatch();

    const isLoggedIn = useSelector(selectIsLoggedIn);

    const {imgURL ,title, popularity, comment, name, birthday, species, category, sex, _id}=notice;
    const [isOpenModalAttention, setIsOpenModalAttention ] =useState(false);
    const [isOpenModalNotice, setIsOpenModalNotice ] =useState(false);
    const [isFavorite, setFevorite]=useState(false);

    const openModalAttention=()=>{
        setIsOpenModalAttention(true);
    }

    const openModalNotice=()=>{
        setIsOpenModalNotice(true);
    }

    const handleAction = () => {
        if (isLoggedIn) {
            openModalNotice();
        } else {
            openModalAttention();
        }
    }

    const handleAddFavorite = (id) => {
        if (id) {
            dispatch(addNotices(id));
            setFevorite(true);
        } else {
            console.error('Invalid ID');
        }
    };

    const handleActionFavorite = (id) => {
        if (isLoggedIn) {
            handleAddFavorite(id);
        } else {
            openModalAttention();
        }
    }

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
                    <TitleTable>Sex</TitleTable>
                    <p>{sex}</p>
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
            
               <Button type='button' onClick={handleAction}>Learn more</Button>
               
               <ButtonSVG $isDefaultFavorite={isFavorite} onClick={()=>handleActionFavorite(_id)}>
                   <svg width={18} height={18}>
                      <use xlinkHref={sprite + '#icon-heart'} />
                   </svg>                
               </ButtonSVG>

           </ContainerButton>

           <ModalAttention isOpenModalAttention={isOpenModalAttention} setIsOpenModalAttention={setIsOpenModalAttention}/>
           <ModalNotice notice={notice} setFevorite={setFevorite} isOpenModalNotice={isOpenModalNotice} setIsOpenModalNotice={setIsOpenModalNotice}/>
        
        </ContainerItem>
    )
}